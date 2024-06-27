const jwt = require ('jsonwebtoken'); // this is downlaod to make stateless authentication
const secret = "Toshita@678$23*$"

function setUser(user){ 
    return jwt.sign({_id: user._id, email: user.email, role: user.role}, secret); // here we have only user so we used user object as a playload direct we have single value if we have mtliple value then we use like below
    //   const playload{id, ...user } 
    //  return jwt.sign(playload, secret);
}
function getUser(token){
        if(!token) return null;
        try{
            return jwt.verify(token, secret);
        } catch{
            return null;
        }
       
}
// function setUser(id, user){ // this function is used in statefull authentication
//     sessionIdToUserMap.set(id, user);
// }



// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

module.exports = {
    setUser,
    getUser
}