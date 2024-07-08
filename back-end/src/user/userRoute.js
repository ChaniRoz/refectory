const express = require("express");
const router = express.Router()

const { addUser, deleteUser, getAllUsers, updateUser, getUserById } = require('./userController')

router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.put('/:userId', updateUser);


module.exports = router
