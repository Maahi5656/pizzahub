import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { MongoClient } from 'mongodb';

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


app.listen(port,()=>{
    console.log(`hire loop is running to port ${port}`)
})
