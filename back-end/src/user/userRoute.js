const express = require("express");
const router = express.Router()

const { addUser, getAllUsers, getUserById } = require('./userController')

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserById);


module.exports = router
