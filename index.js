import { MongoClient } from 'mongodb';
import cors from 'cors'
async function list_database(){
    
    const uri = ""
 

    const client = new MongoClient(uri);
 
    try {
    
        await client.connect();
 
        
        const res =   await client
        .db()
        .admin()
        .listDatabases();
        return res.databases;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

import express from 'express' 
const app = express()

app.use(cors());
app.use(express.json());

app.get("/" , ((req , res) =>(
    res.send("hello world")
)))

app.post("/tasks" , ((req , res) =>{
    const data = req.body;
    console.log(data);
    res.status(201).json({
        message: "data received successfully",
        data: data
    });
}))
app.get("/db" ,  (async (req , res) =>{
    const database = await list_database().catch(console.error);
    res.send(database)
    
}))
app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});