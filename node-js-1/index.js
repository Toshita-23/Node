// Example of file module

// const a = {average: (a, b) => {
//     console.log((a + b) / 2);
// },
// percent:(a,b) => {
//     console.log((a / b) * 100);
// }
// }
// module.exports = a;

const http = require("http");
const fs = require("fs");

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8")

const server = http.createServer((req, res) =>{
    if(req.url === "/" ){
        return res.end(home);
    }
});

server.listen(PORT, hostname, () =>{
    console.log(`Server is working on http://${hostname}:${PORT}`);
})