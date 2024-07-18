
//chat
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true,
    },
});


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('A new user has connected', socket.id);
    sendMessageToClient('Hello from server! i sucess to connect');

    // socket.on('message', (message) => {  
    //     console.log(`Message from ${socket.id}: ${message}`);
    //     socket.emit('message', 'שלום שלום');

    // });

    socket.on('message', ({ text, clientId }) => {
        console.log(`הודעה מ-${clientId}: ${text}`);
        // שלח את ההודעה ללקוח הרלוונטי או טפל בה ככה שמתאים
        const clientSocket = clients[clientId];
        if (clientSocket) {
            clientSocket.emit('message', text); // שלח את ההודעה בחזרה ללקוח
        }
    });
    

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        sendMessageToClient('error i dont sucess to connect');


    });

    socket.on('setUsername', (username) => {
        console.log(`User ${socket.id} set username to ${username}`);
    });
});
const sendMessageToClient = (message) => {
    io.emit('message', message);
};

// server.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });
