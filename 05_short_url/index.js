const express = require("express");
const path = require("path");
const {connectToMongoDB} = require("./connect")
const urlRoute = require("./routes/url");
const URL = require("./models/url")
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url-new').then(console.log("Mongo DB connected"));

app.set("View Engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());

app.get("/url/:shortId", async(req, res) =>{
    const allUrls = await URL.find({});
    return res.render('home')
})

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) =>{
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
