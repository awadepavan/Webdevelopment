import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());


app.get("/", function (req, res) {
  res.json({});
});


app.get("/users", async (req, res) => {
 /* const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("project");
  let list = await db.collection("user").find().toArray();

  await client.close();
*/
res.json({ });

 // res.json(list);
});


app.get("/users/:id", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("project");

  let id = new ObjectId(req.params.id);
  let user = await db.collection("user").findOne({ _id: id });

  await client.close();

  res.json(user);
});

app.get("/users/query_by_username/:username", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("project");
  let user = await db
    .collection("user")
    .findOne({ username: req.params.username });

  await client.close();

  res.json(user);
});


app.post("/user/", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let userDocument = req.body;

  const db = client.db("project");
  await db.collection("user").insertOne(userDocument);

  await client.close();

  res.json({ opr: true });
});


app.delete("/user/:id", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  let id = new ObjectId(req.params.id);
  await db.collection("user").deleteOne({ _id: id });

  await client.close();

  res.json({ opr: true });
});

app.listen(4000);