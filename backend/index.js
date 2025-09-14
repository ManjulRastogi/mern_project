import express from 'express';
import { connection} from './databaseconfig.js';
import cors from 'cors';
import { ObjectId } from 'mongodb';

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
    
  try {
    const db = await connection();
    const collection = await db.collection('todoList');
    const result = await collection.find().toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get('/UpdateList/:id', async (req, res) => {
  try {
    const db = await connection();
    const collection = await db.collection('todoList');
    const task = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' }); // JSON return karo
  }
});


app.get('/', (req, res) => {

    res.send({
        message: "Server is running"

    });
});
app.delete('/delete/:id', async (req, res) => {
    const db = await connection();
    const collection =  await db.collection('todoList');
    const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
    res.json({ message :"Task Deleted"});
});
app.put('/UpdateList/:id', async (req, res) => {
  try {
    const db = await connection();
    const collection = await db.collection('todoList');
    await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { title: req.body.title, desc: req.body.desc } }
    );
    res.json({ message: "Task Updated" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(3000);