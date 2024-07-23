const express = require('express')
const cors = require('cors')
const app = express()
const db = require('mongoose')
require('dotenv').config()
//middleware
app.use(cors());
//db
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
//listen port 
app.listen('3000', () => {
    console.log("port running");
})