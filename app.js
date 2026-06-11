const express = require("express")

const app = express()

const PORT = 3000


app.get("/", (req, res)=>{
    res.json("Welcom to Hairun Technology ! ")
})

app.get("/api", (req, res)=>{
    res.json("you are the best ! ")
})

app.listen(PORT, ()=> console.log(`app run on : http://localhost:${PORT}`))
