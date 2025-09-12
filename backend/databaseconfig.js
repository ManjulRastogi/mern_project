import { MongoClient } from "mongodb";

const url="mongodb+srv://manjul:12345@cluster0.sghfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 const dbName="nodeProject";
 export const collectionName="todoList";
const client=new MongoClient(url);
export const connection=async()=>{
    const connect=await client.connect();
    return await connect.db(dbName);
}
