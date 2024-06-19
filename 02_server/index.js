// code before express method.

//const http = require ("http")
// const fs = require("fs")
// const url = require("url")


// const myServer = http.createServer((req, res) => {
//     if(req.url == "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname){
//             case "/":
//                 if(req.method === "GET") res.end("Hello From Server, Homepage");
//             break;
//             case "/about":
//                 const username = myUrl.query.myName;
//                 res.end(`Hello, ${username}`);
//             break;
//             case "/search":
//                 const search = myUrl.query.serach_query;
//                 res.end(`Here are the result for, ${search}`);
//             case "/singup":
//             if(req.method === 'GET') res.end('This is a Signup Form');
//             else if(req.method === 'POST'){
//                 //DB query
//                 res.end("Success");
//             }
//             default:
//                 res.end("Bad request, 404 Not Found");
//         }
        
//     })

    
// });

// myServer.listen(8000, () => console.log("Server Started!"));
//  End

// Code after intialise express
const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    return res.send("Hello From Server, Homepage")
})

app.get('/about', (req, res) =>{
    return res.send(`Hello From Server, About Page ${req.query.name}`)
})

app.listen(8000, () => console.log("Server Started!"))
// end