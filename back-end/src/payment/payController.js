const payment = require('./paymentSchema');
const { validate } = require('../validation/payValid');

exports.addPayment = async (req, res) => {

  let validatePayment = validate(req.body);
  console.log(validatePayment, "validatePayment");

  if (validatePayment.error) {
    return res.status(400).json({ message: 'valid' });
  }
  const request = await payment.create(req.body);
  res.json(req.body)
  console.log(request);
}
exports.getPaymentById = async (req, res) => {
  const paymentId = req.params.paymentId;
  console.log("paymentId", paymentId);
  try {
    const payment = await payment.find({ paymentId: paymentId })
    console.log("payment",payment);
    if (!payment) {
      return res.status(404).json({ message: 'not found' })
    }
    res.json(payment);
  } catch (error) {
    console.error('Failed to get  payment:', error);
    res.status(500).json({ message: 'Failed to get this payment' });
  }
};