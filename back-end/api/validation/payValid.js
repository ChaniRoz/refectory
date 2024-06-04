const Joi = require('joi');

let paySchema = Joi.object({
    paymentId:Joi.string(),
    numCard:Joi.string().min(16).max(16),
    dateCard:Joi.string(),
    cvc:Joi.string().min(3).max(3),
})

exports.validate = (payData) => {
    return paySchema.validate(payData);
}