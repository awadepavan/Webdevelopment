import { query } from "express";
import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";

async function insertdata(data) {
  const client = new MongoClient(uri);

  const db = client.db("Collage2");
  let result = await db.collection("Student").insertOne(data);

  await client.close();
}

async function readdata() {
  const client = new MongoClient(uri);

  const db = client.db("Collage2");
  const student_collection = db.collection("Student");

  let list = await student_collection.find().toArray();
  await client.close();
  console.log(list);
  return list;
}

async function find(data) {
  const client = new MongoClient(uri);

  const db = client.db("Collage2");
  const student_collection = db.collection("Student");
 
  let document = await student_collection.findOne({rollNumber:data});

  await client.close();
  console.log(document);
  return document;
}


async function update(data) {
  const client = new MongoClient(uri);

  const db = client.db("Collage2");
  const student_collection = db.collection("Student");
  const filter = { rollNumber: data.rollNumber };
  let update = { $set: { name: data.newValue2,division: data.newValue3,branch: data.newValue4 } }; 
  let result = await student_collection.updateOne(filter, update);
  await client.close();

  return result.modifiedCount;
}
//update();

async function deletedata(data) {
  const client = new MongoClient(uri);

  const db = client.db("Collage2");
  const student_collection = db.collection("Student");
  let document = await student_collection.deleteOne({rollNumber:data});

  await client.close();
  console.log(document);
  return document;

}

export { insertdata, readdata,find ,update,deletedata};

//find("123456");