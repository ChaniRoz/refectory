require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const userRouter = require('./src/loginWithGoogle/routers/user.router');
require('./src/loginWithGoogle/middelware/Auth0');
const morgan = require('morgan');


const orderRoutes = require('./src/order/orderRoutes');
const eventRoute = require('./src/event/eventRoutes');
const paymentRoute = require('./src/payment/paymentRoute');
const itemRoute = require('./src/item/itemRoutes');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'SECRET', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/users', userRouter);
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.use('/order', orderRoutes)
app.use('/payment', paymentRoute)
app.use('/event', eventRoute)
app.use('/item', itemRoute)

// addItemsToDB() //const {addItemsToDB} = require('./src/item/itemsForDB');

const PORT = process.env.PORT || 5000;
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

const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true,
    },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/src', 'index.html'));
});

const clients = {}; 

io.on('connection', (socket) => {
    const clientId = socket.handshake.query.clientId; 

    clients[clientId] = socket;
    io.emit('clients', Object.keys(clients)); 

    socket.join(clientId);

    socket.on('message', (message) => {
        console.log(`Message from ${clientId}: ${message.text}`);
        io.to('admin').emit('message', { clientId, text: message.text });
        io.to(clientId).emit('message', { clientId, text: message.text });

    });

    socket.on('message-admin', (message) => {
        console.log(`Admin message to ${message.clientId}: ${message.text}`);
        io.to(message.clientId).emit('message', { clientId: 'admin', text: message.text });
    });

    socket.on('disconnect', () => {
        console.log(`${clientId} disconnected`);
        delete clients[clientId];
        io.emit('clients', Object.keys(clients)); 
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});