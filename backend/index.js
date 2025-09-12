import express from 'express';
import { connection} from './databaseconfig.js';
import cors from 'cors';


let app = express();
app.use(express.json());
app.use(cors());
app.post('/AddTask', async (req, res) => {
    const db = await connection();
    const collection =  await db.collection('todoList');
    const result = await collection.insertOne(req.body);
    res.send("Task Added");
});

app.get('/list', async (req, res) => {
    const db = await connection();
    const collection =  await db.collection('todoList');
    const result = await collection.find().toArray();
    res.json(result);
});

app.get('/', (req, res) => {

    res.send({
        message: "Server is running"

    });
});
app.listen(3000);