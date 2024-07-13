const express = require("express");
const router = express.Router()

const { addUser, getAllUsers, getUserById, getUserByEmail } = require('./userController')

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:email', getUserByEmail);


module.exports = router
