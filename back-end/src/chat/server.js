
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const path = require('path');

function initializeSocketServer() {
    const app = express();
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
            // console.log(`Message from ${clientId}: ${message.text}`);
            io.to('admin').emit('message', { clientId, text: message.text });
            io.to(clientId).emit('message', { clientId, text: message.text });

        });

        socket.on('message-admin', (message) => {
            // console.log(`Admin message to ${message.clientId}: ${message.text}`);
            io.to(message.clientId).emit('message', { clientId: 'admin', text: message.text });
        });

        socket.on('disconnect', () => {
            // console.log(`${clientId} disconnected`);
            delete clients[clientId];
            io.emit('clients', Object.keys(clients)); 
        });
    });

    server.listen(5000, () => {
        console.log('Chat is connected succefully!!!');
    });
}

module.exports = initializeSocketServer;