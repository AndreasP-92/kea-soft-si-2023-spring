import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/synchronize-time",(req,res)=>{
    res.writeHead(200,{
        "content-type": "text/event-stream",
        "cache-control": "no-cache",
        "connection":"keep-alive"
    });
    setInterval(()=> sendTimeToClient(res),1000);
    // setInterval(()=> res.write(`data: hello\n\n`),1000);
    // setInterval(()=> sendTimeToClient(res),1000);

    // res.write(`data: hello`)
    // res.write(`data: hello`)
})

function sendTimeToClient(res){
    const time = new Date().toTimeString();
    res.write(`data: ${time}\n\n`);
}

const port = 8080;
app.listen(port,()=>console.log('listening on port '+port));