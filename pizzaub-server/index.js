import express, { response } from 'express'
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

app.get('/menu/:id', async(request, response)=>{
    const id = request.params.id;
    const getItems = menu.find({userId:id});
    const result = await getItems.toArray();

    response.send(result);
});

app.post('/menu', async(request, response)=>{
    const menuItem = request.body;
    const result = await menu.insertOne(menuItem);

    return response.json(result);
})

app.listen(port,()=>{
    console.log(`hire loop is running to port ${port}`)
})
