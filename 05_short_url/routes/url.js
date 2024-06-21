const express = require('express');
const {handleGenrateNewShortURl, handleGetAnalytics} = require("../controllers/url")

const router = express.Router();

router.post("/", handleGenrateNewShortURl);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;