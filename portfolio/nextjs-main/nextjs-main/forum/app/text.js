import { MongoClient } from "mongodb";

const client = await MongoClient.connect('mongodb+srv://pellbo:<dkagh7878>@mrlee.3vgxygk.mongodb.net/?retryWrites=true&w=majority&appName=Mrlee',{useNewUrlParser:true});
const db = client.db("forum");
db.collection('post').find();