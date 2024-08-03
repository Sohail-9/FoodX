const express = require('express')
const cors = require('cors')
const app = express()
import jwt from "jsonwebtoken";
const db = require('mongoose')
const parser = require("body-parser")
require('dotenv').config()
const {createUser, loginUser} = require("./controller/userController")
const {createPost, getAllData} = require("./controller/postController")

//middleware
app.use(cors());
app.use(parser.json());

async function authMiddleware(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");
    if (decoded) {
      next();
    } else {
      res.status(401).send("Unauthorised");
    }
  }
  

//database
db.connect(process.env.mongoUrl).then(() => {
    console.log("connected to db")
})
.catch((e) => {
    console.error("throw error" + e);
})

//routing
app.get("/", (req, res) => {
    res.send("running app");
})
app.post("/post/create", createPost);
app.post("/user/create", createUser);
app.get("/user/login", loginUser);
app.get("/post/details", getAllData);
//listen port 
const port =  process.env.PORT
app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
})