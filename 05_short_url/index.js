const express = require("express");
const path = require("path");
const cookieparser = require("cookie-parser");
const {connectToMongoDB} = require("./connect");
const {checkforAuthentication, restrictTo} = require("./middlewares/auth")
const URL = require("./models/url")

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url-new').then(console.log("Mongo DB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieparser());
app.use(checkforAuthentication);

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get('/url/:shortId', async (req, res) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }, 
        { 
            $push:{visitHistory: { timestamp: Date.now() }}
        }
    )
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))
