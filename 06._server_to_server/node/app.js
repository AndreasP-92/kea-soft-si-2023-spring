import express from "express";
const app = express();

app.get("/date", (req,res)=>{
    res.send(new Date());
})

app.get("/datefromfastapi", async (req,res)=>{
    const data = await fetch('http://127.0.0.1:8000/date')
    res.send(await data.json());
    
})

app.listen(8080, () => console.log("Server is running on port",8080));