require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
// const morgan=require('morgan')

require('./src/Auth0');
const userRouter = require('./src/routes/user.route');
const eventRoute = require('./src/routes/event.route');
const paymentRoute = require('./src/routes/payment.route');
const itemRoute = require('./src/routes/item.route');
//chat
const initializeSocketServer = require('./src/chat/server');

initializeSocketServer();

const app = express()
app.use(cors())
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'SECRET', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', userRouter);
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.use('/payment', paymentRoute)
app.use('/event', eventRoute)
app.use('/item', itemRoute)

// const {addItemsToDB} = require('./src/itemsForDB');
// addItemsToDB() 

const PORT = process.env.PORT;
//mongo
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => console.log(`server runing on port ${PORT}`)))
    .catch((error) => console.log(error.message));

//login with google
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('http://localhost:3001/signin');
});

app.get('/auth/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed', error: err });
        }
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to destroy session', error: err });
            }
            res.clearCookie('connect.sid');
            res.json({ message: 'Logout successful' });
        });
    });
});

app.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});
app.get('/', (req, res) => {
    res.send('Home Page');
});
