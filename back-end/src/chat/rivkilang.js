// טיפול באירועים של socket.io
io.on('connection', (socket) => {
    console.log('משתמש חדש מחובר');

    // Handle 'create-room' event here
    socket.on('create-room', (roomName) => {
        console.log(`A new chat room "${roomName}" is requested`);
        // You can then emit events or perform actions related to room creation
    });


    // socket.on('login', ({ name, room }, callback) => {
    //     const { user, error } = addUser(socket.id, name, room)
    //     if (error) return callback(error)
    //     socket.join(user.room)
    //     socket.in(room).emit('notification', { title: 'Someone\'s here', description: `${user.name} just entered the room` })
    //     io.in(room).emit('users', getUsers(room))
    //     callback()
    // })


    // טיפול בהודעות שנשלחות בחדר צ'אט
    // socket.on('chatMessage', (message) => {
    //     // לשלוח את ההודעה לחדר המתאים
    //     io.to(message.room).emit('chatMessage', message);
    // });

    //טיפול בהודאה חדשה שנשלחה מהמשתמש
    socket.on('sendMessage', message => {
        console.log("sendMessage",message);
        const user = getUser(socket.id)
        io.in(user.room).emit('message', { user: user.name, text: message });
    })

    // טיפול בהתנתקות
    socket.on("disconnect", () => {
        console.log("User disconnected");
        // const user = deleteUser(socket.id)
        // if (user) {
        //     io.in(user.room).emit('notification', { title: 'Someone just left', description: `${user.name} just left the room` })
        //     io.in(user.room).emit('users', getUsers(user.room))
        // }
    })


});