require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./src/order/orderRoutes');
const userRoute = require('./src/user/userRoute');
const eventRoute = require('./src/event/eventRoutes');
const itemRoute = require('./src/item/itemRoutes');

const paymentRoute = require('./src/payment/paymentRoute');
const cors=require('cors')

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



// //chat
// const http = require('http');
// // const express = require('express');
// const { Server } = require('socket.io');
// const path = require('path');
// // const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         credentials: true,
//     },
// });


// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../front-end/src', 'index.html'));
// });

// app.get('/admin', (req, res) => {
//     res.send(`
//         <html>
//             <body>
//                 <form action="/send-message" method="post">
//                     <input type="text" name="message" placeholder="Enter message">
//                     <button type="submit">Send Message</button>
//                 </form>
//             </body>
//         </html>
//     `);
// });

// app.post('/send-message', (req, res) => {
//     const message = req.body.message;
//     sendMessageToClient(message);
//     res.redirect('/admin');
// });

// io.on('connection', (socket) => {
//     const roomId = socket.id; 
//     socket.join(roomId);

//     // socket.on('create-room', (roomId) => {  
//     //     console.log(`A new chat room "${roomId}" is requested`);

//     // });

//     console.log('A new user has connected', socket.id);
//     io.to(roomId).emit('message', 'Hello from server! i sucess to connect');

//     socket.on('message', (message) => {
//         console.log(`Message from ${socket.id}: ${message}`);
//         io.to(roomId).emit('message', message);
//     });

//     socket.on('disconnect', () => {
//         console.log(`${socket.id} disconnected`);
//         io.to(roomId).emit('message', 'Client disconnected');
//     });

//     socket.on('setUsername', (username) => {
//         console.log(`User ${socket.id} set username to ${username}`);
//     });
// });

// const sendMessageToClient = (message) => {
//     io.emit('message', message);
// };

// // server.listen(5000, () => {
// //     console.log('Server is running on port 5000');
// // });