import express from "express"
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.post("/github",(req,res)=>{

    console.log(req.body);
    res.send({})
})

app.get("/test",(req,res)=>{
    res.send("test")
})

const PORT = 8080;

app.listen(PORT, ()=>{console.log("Listening on port " + PORT)});