const express = require('express')
const cors = require('cors')
const app = express()
//middleware


//routing
app.get("/", (req, res) => {
    res.send("running app");
})

//listen port 
app.listen('3000', () => {
    console.log("port running");
})