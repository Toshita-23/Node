const express = require("express");
const {handleGetAllUsers, handlegetUserByID, handleUpdateUserByID, handleDeleteUserByID, handleCreateNewUser} = require("../controllers/user")
const router = express.Router();

// app.get('/', async (req, res) => {
//     const allDbUsers = await User.find({});
//    const html = `<ul> ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join('')} </ul>`;
//    res.send(html);
// })

router.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router.route("/:id")
.get(handlegetUserByID)
.patch(handleUpdateUserByID)
.delete(handleDeleteUserByID)

module.exports = router;