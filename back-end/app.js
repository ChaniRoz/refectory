require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./src/order/orderRoutes');
const userRoute = require('./src/user/userRoute');
const eventRoute = require('./src/event/eventRoutes');
const paymentRoute = require('./src/payment/paymentRoute');
const itemRoute = require('./src/item/itemRoutes');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json());

app.use('/order', orderRoutes)
app.use('/user', userRoute)
app.use('/payment', paymentRoute)
app.use('/event', eventRoute)
app.use('/item', itemRoute)

const PORT = process.env.PORT || 5000;


//mongo
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => console.log(`server runing on port ${PORT}`)))
    .catch((error) => console.log(error.message));

const http = require('http');
// const express = require('express');
const { Server } = require('socket.io');
const path = require('path');
// const bodyParser = require('body-parser');

// const app = express();
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


const clients = {}; // אובייקט לאחסון הלקוחות המחוברים


io.on('connection', (socket) => {

    const clientId = socket.handshake.query.clientId; // קבל את זיהוי הלקוח

    // הוספת הלקוח לאובייקט הלקוחות
    // clients[socket.id] = socket;
    clients[clientId] = socket;

    io.emit('clients', Object.keys(clients)); // שליחת רשימת הלקוחות לכל הלקוחות

    // הצטרפות לחדר לפי ID
    const roomId = socket.id;
    socket.join(roomId);
    io.to(roomId).emit('message', 'Hello from server! You are connected.');
    io.to(roomId).emit('message-admin', 'Hello from server! You are connected.');

    socket.on('message', (message) => {
        // console.log(message.id, "message.idmessage.idmessage.id");

        console.log(`Message from ${socket.id} , clientId : ${message.id}  massage: ${message.text}`);
        // io.to(roomId).emit('message', message);
        io.emit('message-admin', message.text);
        io.emit('message', message.text);


    });
    socket.on('message-admin', (message) => {
        console.log(`Message from ${socket.id} , clientId : ${message.id}  massage: ${message.text}`);
        io.emit('massage', message.text);
        io.emit('message-admin', message.text);


    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        // הסרת הלקוח מאובייקט הלקוחות
        delete clients[socket.id];
        io.emit('clients', Object.keys(clients)); // עדכון רשימת הלקוחות
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
