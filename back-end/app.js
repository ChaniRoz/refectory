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

// const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true,
    },
});

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../front-end/src', 'index.html'));
// });

// app.post('/send-message', (req, res) => {
//     const message = req.body.message;
//     sendMessageToClient(message);
//     res.redirect('/admin');
// });


let clients = {}; // אובייקט לשמירת הלקוחות המחוברים
io.on('connection', (socket) => {
    socket.on('connect', () => {

    console.log('A new user has connected', socket.id);
    })
    clients[socket.id] = socket;
    io.emit('clients', Object.keys(clients)); // שליחת רשימת הלקוחות לכל הלקוחות

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        delete clients[socket.id];
        io.emit('clients', Object.keys(clients)); // עדכון רשימת הלקוחות
    });
    // });
    // io.on('connection', (socket) => {
    clients.push(socket.id);
    console.log('A new user has connected', socket.id);
    socket.emit('message', 'Hello from server! i succeed to connect');

    io.emit('clients', clients); // שלח את רשימת הלקוחות למנהל

    socket.on('message', (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
        io.emit('message', message);
    });

    // socket.on('privateMessage', ({ message, user }) => {
    //     io.to(user).emit('message', message);
    // });

    // socket.on('disconnect', () => {
    //     console.log(`${socket.id} disconnected`);
    //     clients = clients.filter(client => client !== socket.id);
    //     io.emit('clients', clients); // עדכן את רשימת הלקוחות לאחר ניתוק
    // // });

    // socket.on('setUsername', (username) => {
    //     console.log(`User ${socket.id} set username to ${username}`);
    // });
    // });

    // io.on('connection', (socket) => {
    // console.log('A new user has connected', socket.id);

    // הוספת הלקוח לאובייקט הלקוחות
    // clients[socket.id] = socket;
    // io.emit('clients', Object.keys(clients)); // שליחת רשימת הלקוחות לכל הלקוחות

    // הצטרפות לחדר לפי ID
    const roomId = socket.id;
    socket.join(roomId);
    io.to(roomId).emit('message', 'Hello from server! i success to connect');

    socket.on('message', (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
        io.to(roomId).emit('message', message);
    });

    // socket.on('disconnect', () => {
    //     console.log(`${socket.id} disconnected`);
    //     // הסרת הלקוח מאובייקט הלקוחות
    //     delete clients[socket.id];
    //     io.emit('clients', Object.keys(clients)); // עדכון רשימת הלקוחות
    // });

    // socket.on('setUsername', (username) => {
    //     console.log(`User ${socket.id} set username to ${username}`);
    // });
});

// const sendMessageToClient = (message) => {
//     io.emit('message', message);
// };

// server.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });


