const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName){
    return(req, res, next) => {
        const tookenCookieValue = req.cookies[cookieName];
        if (!tookenCookieValue){
           return next();
        }

        try{
            const userPlayLoad = validateToken(tookenCookieValue);
            req.user = userPlayLoad;
        } catch(error){}
       return next();

    }
}

module.exports ={
    checkForAuthenticationCookie
}