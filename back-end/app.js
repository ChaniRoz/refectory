require('dotenv').config();
var express = require("express")
const orderRoutes = require('./api/routes/orderRoutes')
const userRoute = require('./api/routes/userRoute')
const eventRoute = require('./api/routes/userRoute')
const paymentRoute = require('./api/routes/paymentRoute')

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
app.use(bodyParser.json());

app.use('/order', orderRoutes)
app.use('/user', userRoute)
app.use('/payment', paymentRoute)
app.use('/event', eventRoute)

const PORT = process.env.PORT || 5000;

//mongo
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => console.log(`server runing on port ${PORT}`)))
    .catch((error) => console.log(error.message));



//