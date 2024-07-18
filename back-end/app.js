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
    clients[clientId] = socket;
    io.emit('clients', Object.keys(clients)); // שליחת רשימת הלקוחות לכל הלקוחות

    // הצטרפות לחדר לפי ID
    socket.join(clientId);

    socket.on('message', (message) => {
        console.log(`Message from ${clientId}: ${message.text}`);
        io.to('admin').emit('message', { clientId, text: message.text });
    });

    socket.on('message-admin', (message) => {
        console.log(`Admin message to ${message.clientId}: ${message.text}`);
        io.to(message.clientId).emit('message', { clientId: 'admin', text: message.text });
    });

    socket.on('disconnect', () => {
        console.log(`${clientId} disconnected`);
        // הסרת הלקוח מאובייקט הלקוחות
        delete clients[clientId];
        io.emit('clients', Object.keys(clients)); // עדכון רשימת הלקוחות
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
