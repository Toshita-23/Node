const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose')

const users = require("./MOCK_DATA.json");
const { type } = require("os");
const app = express();
const PORT = 8000;

//schema
const userSchema = new moongose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    job_title:{
        type: String,
    },
    gender:{
        type: String,
    }
})

const user = mongoose.model("user", userSchema)

// Middleware plugin
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) =>{
   fs.appendFile('log.txt', `\n${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`, (err, data) =>{
    next();
   })
})

//Routes
app.get('/users', (req, res) => {
   const html = `<ul> ${users.map((user) => `<li>${user.first_name}</li>`).join('')} </ul>`;
   res.send(html);
})

app.get('/api/users', (req, res) => {
    res.setHeader('x-myName', 'Toshita'); // by this we can add header in response request. and we can always use X for custom header for better understandig.
    console.log(req.headers);// we can directly add the key value of request headers in postman anoption is available and console all the request header throught this method
    return res.json(users); 
})

app.route("/api/users/:id")
.get((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   if(!user) return res.status(404).json({error: "User not found"});
   return res.json(user);
})
.patch((req, res) => {
    return res.json({status: "Pending"});
})
.delete((req, res) => {
    return res.json({status: "Pending"});
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are req"});
    }
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
        return res.status(201).json({status: "Sucess", id: users.length });
    })
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))


