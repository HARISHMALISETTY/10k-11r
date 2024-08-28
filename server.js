const http=require('http');
const port=3100;

const server=http.createServer((req,res)=>{
    // res.writeHead(200,{ "content-Type":"text/html"},{});
    // res.write("hello world")
    // res.end();
    res.statusCode="200";
    
    
    res.writeHead(res.statusCode,{"content-Type":"application/json"});
    res.write(JSON.stringify({"fdvd":"klnkjln"}))
    res.end("kbkjnjkbk ");

})



server.listen(port, () => {
  console.log(`Server running on ${'http://localhost:' + port}`);
});
