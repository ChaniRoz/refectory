const payment = require('../schema/paymentSchema');
// const {validate} = require('../validation/payValid');

exports.addPayment =  (req, res) => {
  // let validatePayment = validate(req.body);
  // if (validatePayment.error) {
  //   return res.status(400).json({ message: 'valid' });
  // }
  const request =  payment.create(req.body);
  res.json(request)
}
exports.getPaymentById = async (req, res) => {
  const paymentId = req.params.paymentId;
  try {
    const payment = await payment.find({ paymentId: paymentId })
    res.json(payment);
  } catch (error) {
    console.error('Failed to get  payment:', error);
    res.status(500).json({ message: 'Failed to get this payment' });
  }
};