require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const userRouter = require('./src/loginWithGoogle/routers/user.router');
require('./src/loginWithGoogle/middelware/Auth0');

const orderRoutes = require('./src/order/orderRoutes');
const userRoute = require('./src/user/userRoute');
const eventRoute = require('./src/event/eventRoutes');
const paymentRoute = require('./src/payment/paymentRoute');
const itemRoute = require('./src/item/itemRoutes');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'SECRET', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/users', userRouter);
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.use('/order', orderRoutes)
app.use('/user', userRoute)
app.use('/payment', paymentRoute)
app.use('/event', eventRoute)
app.use('/item', itemRoute)

// addItemsToDB() //Used to add the list of items to the DB
const PORT = process.env.PORT || 5000;


//mongo
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => console.log(`server runing on port ${PORT}`)))
    .catch((error) => console.log(error.message));

//login with google
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
    // res.redirect('/users/signup')
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


// const http = require('http');
// const { Server } = require('socket.io');
// const path = require('path');
// const { required } = require('joi');

// const server = http.createServer();
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         credentials: true,
//     },
// });


// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// io.on('connection', (socket) => {
//     console.log('A new user has connected', socket.id);
//     sendMessageToClient('Hello from server! i sucess to connect');

//     socket.on('message', (message) => {
//         console.log(`Message from ${socket.id}: ${message}`);
//         socket.emit('message', 'שלום שלום');

//     });

//     socket.on('disconnect', () => {
//         console.log(`${socket.id} disconnected`);
//         sendMessageToClient('error i dont sucess to connect');


//     });

//     socket.on('setUsername', (username) => {
//         console.log(`User ${socket.id} set username to ${username}`);
//     });
// });
// const sendMessageToClient = (message) => {
//     io.emit('message', message);
// };

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
//     () => app.listen(PORT, () => console.log(`server runing on port ${PORT}`)))
//     .catch((error) => console.log(error.message));

