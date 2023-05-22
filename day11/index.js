import express, { request } from "express";
import cors from "cors";
import { readdata, insertdata,find,update,deletedata} from "./db_Collage.js";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// localhost:4000/
app.get("/", async (req, res) => {
  let list = await readdata();
  res.json(list);
});

// localhost:4000/add_data
app.get("/add_data", async (req, res) => {
  let message = req.query.message || "Custom Message";
  await insertdata({ message: message });
  res.json({ message: "Success" });
});

// localhost:4000/add_data
app.post("/add_data", async (req, res) => {
  let data = req.body;
  await insertdata(data);
  res.json({ message: "true" });
});

//localhost:4000/findone
app.get("/findone/:rollNumber", async (req, res) => {
   // console.log();
  let list = await find(req.params.rollNumber);
  res.json(list);
});

// app.put("/put",async(req,res) => {

//   let data =req.body;
//   await update(data,update);
//   res.json({message:"updated"});
// });

app.put("/put",async(req,res) => {

  let data =req.body;
  update(data,update);
  res.json({message:"update succesful"});
});

app.delete("/delete/:rollNumber", async (req, res) => {
  let list = await deletedata(req.params.rollNumber);
   console.log(req.params.rollNumber);
   res.json(list);
 });

app.listen(4000);