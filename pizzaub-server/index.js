import express, { request, response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { MongoClient, ObjectId } from 'mongodb';

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

app.get('/', (request,response)=>{
    response.send({message: 'Server is running fine!'})
});

app.get('/user', async(request, response)=>{
    const result = await users.find().toArray();

    response.send(result);
});

app.get('/user/:role', async(request, response)=>{
    const { role } = request.params;
    const result = await users.find({ role: role }).toArray();

    response.send(result);
})

app.get('/user/customer/:id', async(request, response)=>{
    const id = request.params.id;
    const result = await users.findOne({_id:new ObjectId(id)});

    response.send(result); 
});

app.patch('/user/customer/:id', async(request, response)=>{
    
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

app.get('/users/:id/subscription', async(request, response)=>{

    const id = request.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await users.findOne(query, { projection: { subscriptionPlan: 1 }});

    response.send(result);
});

app.patch('/user/:id/shop', async(request, response)=>{
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

app.get('/menu/vendor/:id', async(request, response)=>{
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

        response.send(countMenu);

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

app.listen(port,()=>{
    console.log(`hire loop is running to port ${port}`)
})
