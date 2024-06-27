const {getUser} = require("../service/auth")

function checkforAuthentication(req, res, next){
    const tokenCookie = req.cookies?.token;
    req.user = null;

    if (!tokenCookie) return next();

    const token = tokenCookie;
    const user = getUser(token);

    req.user = user;
    return next();
}

function restrictTo( roles = []){
    return function(req, res, next){
        if(!req.user) return res.redirect("/login");
        if(!roles.includes(req.user.role)) return res.end("UnAuthorised");

        return next();
    }
}

// function checkforAuthentication(req, res, next){
//     const authorizationHeaderValue = req.headers["authorization"];
//     req.user = null;

//     if (!authorizationHeaderValue || authorizationHeaderValue.startsWith("Bearer"))
//     return next();

//     const token = authorizationHeaderValue.split("Bearer ")[1];
//     const user = getUser(token);

//     req.user = user;
//     return next();
// }

// function restrictTo( roles = []){
//     return function(req, res, next){
//         if(!req.user) return res.redirect("/login");
//         if(!roles.includes(req.user.roles)) return res.end("UnAuthorised");

//         return next();
//     }
// }
// async function restrictToLoggedInUserOnly(req, res, next){
//     // const userUid = req.cookies?.uid;

//     const userUid = req.headers["Authorization"];

//     if(!userUid) return res.redirect("/login");
//     const token = userUid.split("Bearer ")[1];
//     const user = getUser(token);
//     // const user = getUser(userUid); 


//     if(!user) return res.redirect("/login");

//     req.user = user;
//     next();
// }

// async function checkAuth(req, res, next) {
//     // const userUid = req.cookies?.uid;
//     console.log(req.headers)

//     const userUid = req.headers["authorization"];
//     const token = userUid.split("Bearer ")[1]
//     const user = getUser(token);

//     req.user = user;
//     next();
// }

module.exports = {
    checkforAuthentication,
    restrictTo,
    // restrictToLoggedInUserOnly,
    // checkAuth
}