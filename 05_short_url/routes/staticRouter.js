const express = require('express');

const router = express.Router();

router.get('/', async (res, req) =>{
    const allUrls = await URL.find({})
    return req.render("home", {
        urls: allUrls
    });
})

module.exports = router;