import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app =express();
const PORT=process.env.PORT;
import { MongoClient } from "mongodb";
app.use(express.json());


const MONGO_URL = process.env.MONGO_URL;
async function createConnection(){
const client=new MongoClient(MONGO_URL);
await  client.connect();
 console.log("mongo is connected🥰🥰")
 return client;
} 
const client= await createConnection();


//get a capstone
app.get("/zen",async function(request,response){
    const zen = await client.db("b30wd").collection("capstone").find({}).toArray();
    response.send(zen)
})
//geta capstone by id
app.get("/zen/:id",async function(request,response){
    console.log(request.params)
    const{id}=request.params
    const zen = await client.db("b30wd").collection("capstone").findOne({id:id})
    response.send(zen)
  })
//create a capstone
app.post("/zen",async function(request,response){
    const data=request.body;
    const zen=  await client.db("b30wd").collection("capstone").insertMany(data);
    response.send(zen)
})


   //get a leave
   app.get("/leave",function(request,response){
       response.send(leave)
    })
app.get("/leave",async function(request,response){
    const leave = await client.db("b30wd").collection("leave").find({}).toArray();
    response.send(leave)
})
//get leave by id
app.get("/leave/:id",async function(request,response){
    console.log(request.params)
    const{id}=request.params
    const leave = await client.db("b30wd").collection("leave").findOne({id:id})
    response.send(leave)
  })
//create a leave
app.post("/leave",async function(request,response){
    const data=request.body;
    const leave=  await client.db("b30wd").collection("leave").insertMany(data);
    response.send(leave)
})

app.listen(PORT,()=>console.log(`server started ${PORT}`))