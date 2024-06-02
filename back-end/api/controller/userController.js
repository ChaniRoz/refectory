const user = require('../schema/userSchema');
const {validate} = require('../validation/userValid');

exports.addUser = async (req, res) => {

  //validation
  let validateUser = validate(req.body);
  console.log(validateUser,"validateUser");
  if (validateUser.error) {
    return res.status(400).json({ message: 'valid' });
  }
  const request = await user.create(req.body);
  res.json(request)
}
