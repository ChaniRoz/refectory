const user = require('./userSchema');
const { validate } = require('../validation/userValid');

exports.addUser = async (req, res) => {

  let validateUser = validate(req.body);
  console.log(validateUser, "validateUser");

  if (validateUser.error) {
    return res.status(400).json({ message: 'valid' });
  }
  const request = await user.create(req.body);
  console.log("request", request);
  res.json(request)
}

exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deleteUser = await user.findOneAndDelete({ userId: userId });
    if (!deleteUser) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.json({ message: 'user deleted successfully' });
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    console.error('Failed to get all users:', error);
    res.status(500).json({ message: 'Failed to get all users' });
  }
};

exports.updateUser = async (req, res) => {
  let validateUser = validate(req.body);
  console.log(validateUser, "validateUser");

  if (validateUser.error) {
    return res.status(400).json({ message: 'valid' });
  }
  const { userId } = req.params.userId;
  const { userName, phone, email, password } = req.body;
  try {
    const updatedUser = await event.findOneAndUpdate(
      { userId: userId },
      { userName, phone, email, password },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};


exports.getUserById = async (req, res) => {
  const { userId } = req.params.userId;

  try {
    const User = await user.findOne({ userId });
    if (!User) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.json(User);
  } catch (error) {
    console.error('Failed to get user:', error);
    res.status(500).json({ message: 'Failed to get user' });
  }
};