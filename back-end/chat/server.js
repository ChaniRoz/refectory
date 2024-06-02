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

});
const sendMessageToClient = (message) => {
    io.emit('message', message);
};

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
