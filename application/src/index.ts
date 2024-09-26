import express from "express"
const app = express()

app.get("/",(req,res)=>{
    res.json({"msg":"Hello from the server"})
})


app.listen((8001),()=>{
    console.log("server is running on port 8001")
})