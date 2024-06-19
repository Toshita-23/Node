const express = require("express");
const {connectMongoDb}  = require("./connection")

const { logReqRes } = require("./middleware")

const userRouter = require("./routes/user")

const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/node-app-1").then(()=>{
    console.log("Mongodb Connected!")
})

// Middleware plugin
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))


