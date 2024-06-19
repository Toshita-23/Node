const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers); 
}

async function handlegetUserByID(req, res){
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({error: "User not found"});
    return res.json(user);
}

async function handleUpdateUserByID(req, res){
    await User.findByIdAndUpdate(req.params.id, { lastName: "Doe"})
    return res.json({status: "success"});
}

async function handleDeleteUserByID(req, res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status: "Deleted"});
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are req"});
    }
   const result= await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
   });

   return res.status(201).json({msg: "success", id: result._id});
}

module.exports = {
    handleGetAllUsers,
    handlegetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateNewUser,
     
}