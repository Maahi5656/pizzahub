import express, { request, response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { MongoClient, ObjectId } from 'mongodb';
import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jin1a.mongodb.net/`);

export async function connectToMongoDB(){
    try{
        await client.connect();
        console.log("You Are Successfully Connected To MongoDB");
        return client;
    }catch(error){
        console.log(error); 
    }
}

const connectedClient = await connectToMongoDB();
const database = connectedClient.db("pizzahub");
const users = database.collection("user");
const menu = database.collection("menu");
const session = database.collection("session");
const payments = database.collection("payments");

app.get('/', (request,response)=>{
    response.send({message: 'Server is running fine!'})
});

// custom middleware
const verifyToken = async(request, response, next)=>{
    const authHeader = request.headers.authorization;

    if(!authHeader){
        response.send({status:401, message: 'Unauthorized'});
        return;
    }

    const token = authHeader.split(' ')[1];

    if(!token){
        response.send({status: 401, message: 'Unauthorized'});
        return;
    }

    // get session from 'token'
    const query = { token };
    const result = await session.findOne(query);
    
    if(!result){
        response.status(401).send({message: 'Unauthorized'});
        return;
    }
    // finding user from session
    const userId = session.userId;

    const userQuery = { _id: new ObjectId(userId) }
    const user = await users.findOne(userQuery);

    if(!user){
        response.status(401).send({message: 'Unauthorized'});
        return;        
    }

    request.user = user;
    next();
}

const verifyCustomer = async(request, response, next)=>{
    if(request.user.role !== "customer"){
        response.status(403).send({message: 'Forbidden'});
        return;        
    }
    next();
}

const verifyVendor = async(request, response, next)=>{
    if(request.user.role !== "vendor"){
        response.status(403).send({message: 'Forbidden'});
        return;        
    }
    next();    
}

const verifyAdmin = async(request, response, next)=>{
    if(request.user.role !== "admin"){
        response.status(403).send({message: 'Forbidden'});
        return;        
    }
    next();    
}

app.get('/user', async(request, response)=>{
    const result = await users.find().toArray();

    response.send(result);
});

app.get('/user/:id/premium', async(request, response)=>{
    const id = request.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await users.findOne(query, { projection: { subscriptionPlan: 1 }});

    response.send({subscriptionPlan: result.subscriptionPlan});
});

app.get('/user/:role', async(request, response)=>{
    const { role } = request.params;
    const result = await users.find({ role: role }).toArray();

    response.send(result);
})

app.get('/user/customer/:id', verifyToken, verifyCustomer, async(request, response)=>{
    const id = request.params.id;
    const result = await users.findOne({_id:new ObjectId(id)});

    response.send(result); 
});

app.patch('/user/customer/:id', verifyToken, verifyCustomer, async(request, response)=>{
    
    const id = request.params.id;
    const updateData = request.body;
    const result = await users.updateOne(
        {_id: new ObjectId(id)},
        {$set: updateData}        
    )
    
    response.json({
        message: "User Information Updated Successfully",
        result
    });
});

app.get('/user/:id/subscription', async(request, response)=>{

    const id = request.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await users.findOne(query, { projection: { subscriptionPlan: 1 }});

    response.send(result);
});

app.patch('/user/:id/shop', verifyToken, verifyVendor, async(request, response)=>{
    const { id } = request.params;
    const updateData = request.body;
    const result = await users.updateOne(
        {_id: new ObjectId(id)},
        {$set: updateData}
    );

    response.json({
        message: "Shop Information Updated Successfully",
        result
    });

});

app.get('/menu/vendor/:id', verifyToken, verifyToken, async(request, response)=>{
    const id = request.params.id;
    const getItems = menu.find({userId:id});
    const result = await getItems.toArray();

    response.send(result);
});

app.get('/menu', async(request, response)=>{
    const result = await menu.find().toArray();
  
    response.send(result);
});

app.get('/menu/count', async(request, response)=>{

    try{
        const vendorId = request.query.vendorId;
        
        if (!vendorId) {
            return response.status(400).send({
                message: "Vendor ID is required"
            });
        }

        const countMenu = await menu.countDocuments({
            userId: vendorId
        });

        // response.send(countMenu);
        response.status(200).json({
            count: countMenu
        });

    }catch(error){
        console.error(error);
        response.status(500).send({
            message: "Failed to count menu items"
        });
    }
});


app.post('/menu', async(request, response)=>{
    const menuItem = request.body;
    const result = await menu.insertOne(menuItem);

    return response.json(result);
});

app.patch('/menu/:id', async(request, response)=>{
    const { id } = request.params;
    const updateData = request.body; 
    const result = await menu.updateOne(
        { _id: new ObjectId(id) },
        {$set: updateData}
    );

    response.json({
        message: "Menu Item Updated Successfully",
        result
    });
});

app.delete('/menu/:id', async(request, response)=>{
    const { id } = request.params;
    const result = await menu.deleteOne({_id: new ObjectId(id)});

    response.json({
        message: "Menu Item Deleted Successfully",
        result
    });
});

// payments related apis
app.post('/payments/checkout-verify', async(request, response)=>{
    const { sessionId } = request.body;

    if(!sessionId){
        response.send({success: false, message: "Session ID is required"});
    }

    const { 
        status, 
        payment_status, 
        customer_email, 
        metadata, 
        payment_intent 
    } = await stripe.checkout.sessions.retrieve(sessionId);

    // 1) verify session (whether a new session or never used
    // 2) is the session id for the currently logged in user
    // 3) insert sessionId into the payment collection
    // 4) update user information as premium user

    if(status === 'complete' && payment_status === 'paid'){

        const sessionQuery = { sessionId };
        const existingPayment = await payments.findOne(sessionQuery);

        if(existingPayment){
            return response.send({success: false, message: 'Payment Already Verified'});
        }

        const payment = {
            sessionId,
            status,
            payment_status,
            customer_email,
            userId: metadata.userId,
            payment_date: new Date(),
            payment_intent,
        }

        const result = await payments.insertOne(payment);

        //update the user table
        const query = { _id: new ObjectId(metadata.userId) };
        const updatedDoc = {
            $set: {
                subscriptionPlan: "premium"
            }
        }

        const updatedResult = await users.updateOne(
            query,
            updatedDoc
        );
        
        response.send({ success: true, result, updatedResult });
        return;
    }

    // response.send(session);
    response.send({success: false, message: "Payment Verification Failed"});
});

app.listen(port,()=>{
    console.log(`hire loop is running to port ${port}`)
})
