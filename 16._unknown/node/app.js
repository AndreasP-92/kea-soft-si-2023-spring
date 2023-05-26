import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/timestamp", (req,res)=>{
    res.send(new Date())
})

app.listen(8080, ()=> console.log("Server is running on ", 8080));