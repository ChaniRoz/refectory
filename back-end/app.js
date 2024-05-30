require('dotenv').config();
var express = require("express")
const orderRoutes = require('./api/routes/orderRoutes')
const userRoute = require('./api/routes/userRoute')
const eventRoute = require('./api/routes/userRoute')

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
app.use(bodyParser.json());
app.use('/order', orderRoutes)
app.use('/user', userRoute)
app.use('/event', eventRoute)

const PORT = process.env.PORT || 5000;

//mongo
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => console.log(`server runing on port ${PORT}`)))
    .catch((error) => console.log(error.message));


//chat
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true,
    },
});


io.on('connection', (socket) => {
    console.log('A new user has connected', socket.id);
    sendMessageToClient('Hello from server! i sucess to connect');

    // טיפול בהודעות מלקוח לשרת
    socket.on('message', (message) => {  
        console.log(`Message from ${socket.id}: ${message}`);

        // שליחת תשובה חזרה ללקוח ששלח את ההודעה
        socket.emit('message', `Server received: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        sendMessageToClient('error i dont sucess to connect');

    });

    // אופציונלי: טיפול בהגדרת שם משתמש אם נחוץ
    socket.on('setUsername', (username) => {
        console.log(`User ${socket.id} set username to ${username}`);
    });
});
const sendMessageToClient = (message) => {
    io.emit('message', message);
};
// setInterval(() => {
//     sendMessageToClient('Hello from server!');
//   }, 10000);

server.listen(8001, () => {
    console.log('Server is running on port 8001');
});
