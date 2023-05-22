import  express  from "express";
import cors from "cors";
const app = express();

//Handeling client request
app.get("/",function(req,res){
    res.json({});
});

app.get("/users/", (req, res) => {
    let list = [];
    let user1 = { id: 1, name: "rohit", email: "rohit@gmail.com" };
    let user2 = { id: 2, name: "rahul", email: "rahul@gmail.com" };
    list.push(user1);
    list.push(user2);
  
    res.json(list);
  });

  app.get("/users/:id", (req, res) => {
    let user = {
      id: req.params.id,
      name: "rohit",
      email: "rohit@gmail.com",
    };
  
    res.json(user);
  });

  app.get("/posts/", (req, res) => {
    let list = [];
    let post1 = {
      id: 1,
      title: "afda asdfaf asfasfdsa",
      body: "asdfaf asf adsfads",
    };
    let post2 = {
      id: 2,
      title: "afda asdfaf asfasfdsa",
      body: "asdfaf asf adsfads",
    };
  
    list.push(post1);
    list.push(post2);
  
    res.json(list);
  });

  app.get("/posts/:postid", (req, res) => {
    let post = {
      id: req.params.postid,
      title: "adfaf",
      body: "asdf dfads fadsf asdfasdf asdfasd fdasf ads",
    };
  
    res.json(post);
  });
  

// starting server
app.listen(5000);