const user = require('./userSchema');
const { validate } = require('./userValid');

exports.addUser = async (req, res) => {

  let validateUser = validate(req.body);
  console.log(validateUser, "validateUser");

  if (validateUser.error) {
    return res.status(400).json({ message: 'invalid data' });
  }
  const request = await user.create(req.body);
  console.log("request", request);
  res.json(request)
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    console.error('Failed to get all users:', error);
    res.status(500).json({ message: 'Failed to get all users' });
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