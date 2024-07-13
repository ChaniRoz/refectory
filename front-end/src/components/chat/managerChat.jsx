// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Dialog from '@mui/material/Dialog';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import { IconButton } from '@mui/material';
// // import Badge from '@mui/material/Badge';
// // import ChatIcon from '@mui/icons-material/Chat';
// // import CloseIcon from '@mui/icons-material/Close';
// // import SendIcon from '@mui/icons-material/Send';
// // import { styled } from '@mui/material/styles';
// // import Fab from '@mui/material/Fab';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import io from 'socket.io-client';
// // import SingaleMessageComponent from '../chat/singaleMessegeComponent';

// // const socket = io('http://localhost:5000')

// // export default function AdminChat() {
// //   const [open, setOpen] = React.useState(false);
// //   const [scroll, setScroll] = React.useState('paper');
// //   const [message, setMessage] = React.useState('');
// //   const [messages, setMessages] = React.useState([
// //     { text: 'Hello everybody', author: 'Alice', timestamp: '10:00 AM' },


// //   ]);

// //   const users = ['UserA', 'UserB', 'UserC']; // רשימת המשתמשים לבחירה
// //   const descriptionElementRef = React.useRef(null);
// //   React.useEffect(() => {
// //     if (open) {
// //       const { current: descriptionElement } = descriptionElementRef;
// //       if (descriptionElement !== null) {
// //         descriptionElement.focus();
// //       }
// //     }
// //   }, [open]);
// //   const handleUserSelect = (user) => {
// //     // מימוש פעולת בחירת משתמש לשיחה
// //     console.log(`Selected user: ${user}`);
// //   };
// //   const handleClickOpen = (scrollType) => () => {
// //     setOpen(true);
// //     setScroll(scrollType);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };
// //   const sendMessage = (e) => {
// //     e.preventDefault();
// //     socket.emit('message', message);
// //     setMessage('');
// //     setMessages((prevMessages) => [...prevMessages, { text: message, author: 'Server', timestamp: new Date().toLocaleTimeString() }]);
// //   };



// //   return (
// //     <React.Fragment>
// //       <IconButton aria-label="admin chat" size="large"
// //         onClick={handleClickOpen('paper')}
// //       >
// //         <Fab color="primary" aria-label="admin-chat">
// //           <Badge badgeContent={users.length} color="secondary">
// //             <ChatIcon />

// //           </Badge>
// //         </Fab>
// //       </IconButton>

// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         scroll={scroll}
// //         aria-labelledby="scroll-dialog-title"
// //         aria-describedby="scroll-dialog-description"
// //       >
// //         <DialogTitle id="scroll-dialog-title">
// //           <IconButton aria-label="exit"
// //             onClick={handleClose}
// //           >
// //             <CloseIcon />
// //           </IconButton>
// //           Admin Chat
// //         </DialogTitle>
// //         <DialogContent dividers={scroll === 'paper'}>
// //           <DialogContentText
// //             id="scroll-dialog-description"
// //             ref={descriptionElementRef}
// //             tabIndex={-1}
// //             width={300}
// //           >
// //             <div>
// //               {users.map((user, index) => (
// //                 <Button key={index} onClick={() => handleUserSelect(user)}>
// //                   {user}
// //                 </Button>
// //               ))}
// //               {messages.map((msg, index) => (
// //                 <SingaleMessageComponent key={index} message={msg} />
// //               ))}
// //             </div>
// //           </DialogContentText>
// //         </DialogContent>
// //         <DialogActions>
// //           <Box component="form"
// //             onSubmit={sendMessage}
// //             sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
// //             <TextField
// //               id="outlined-multiline-flexible"
// //               label="Message"
// //               multiline
// //               maxRows={4}
// //               style={{ width: '350px' }}
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //             />
// //             <Button type="submit" endIcon={<SendIcon />}>
// //               Send
// //             </Button>
// //           </Box>
// //         </DialogActions>
// //       </Dialog>
// //     </React.Fragment>
// //   );
// // }


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';
// import { IconButton } from '@mui/material';
// import Badge from '@mui/material/Badge';
// import ChatIcon from '@mui/icons-material/Chat';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import { styled } from '@mui/material/styles';
// import Fab from '@mui/material/Fab';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import io from 'socket.io-client';
// import SingaleMessageComponent from '../chat/singaleMessegeComponent';

// const socket = io('http://localhost:5000');

// export default function AdminChat() {
//   const [open, setOpen] = React.useState(false);
//   const [scroll, setScroll] = React.useState('paper');
//   const [message, setMessage] = React.useState('');
//   const [messages, setMessages] = React.useState([]);
//   const [clients, setClients] = React.useState([]);

//   React.useEffect(() => {
//     socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, { text: message, author: 'client', timestamp: new Date().toLocaleTimeString() }]);
//     });

//     socket.on('clients', (clients) => {
//       setClients(clients);
//     });

//     return () => {
//       socket.off('message');
//       socket.off('clients');
//     };
//   }, []);

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
//     setScroll(scrollType);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const sendMessage = (e) => {
//     e.preventDefault();
//     socket.emit('message', message);
//     setMessage('');
//   };

//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);

//   const StyledFab = styled(Fab)({
//     position: 'absolute',
//     zIndex: 1,
//     bottom: -700,
//     left: 30,
//     margin: '0 auto',
//   });

//   return (
//     <React.Fragment>
//       <IconButton aria-label="admin chat" size="large" onClick={handleClickOpen('paper')}>
//         <StyledFab color="primary" aria-label="admin-chat">
//           <Badge badgeContent={clients.length} color="secondary">
//             <ChatIcon />
//           </Badge>
//         </StyledFab>
//       </IconButton>
//       <Dialog/>
//       </React.Fragment>

//   );
// }

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';
// import { IconButton } from '@mui/material';
// import Badge from '@mui/material/Badge';
// import ChatIcon from '@mui/icons-material/Chat';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import { styled } from '@mui/material/styles';
// import Fab from '@mui/material/Fab';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import io from 'socket.io-client';
// import SingaleMessageComponent from '../chat/singaleMessegeComponent';

// const socket = io('http://localhost:5000');

// export default function AdminChat() {
//   const [open, setOpen] = React.useState(false);
//   const [scroll, setScroll] = React.useState('paper');
//   const [message, setMessage] = React.useState('');
//   const [messages, setMessages] = React.useState([]);
//   const [clients, setClients] = React.useState([]);

//   React.useEffect(() => {
//     socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, { text: message, author: 'client', timestamp: new Date().toLocaleTimeString() }]);
//     });

//     socket.on('clients', (clients) => {
//       setClients(clients);
//       console.log("cliens::", clients);
//     });

//     return () => {
//       socket.off('message');
//       socket.off('clients');
//     };
//   }, []);

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
//     setScroll(scrollType);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const sendMessage = (e) => {
//     e.preventDefault();
//     socket.emit('message', message);
//     setMessage('');
//   };
//   const handleUserSelect = (user) => {
//     // שלח הודעה ללקוח ספציפי
//     socket.emit('privateMessage', { message, user });
//   };

//   io.on('connection', (socket) => {
//     clients.push(socket.id);
//     console.log('A new user has connected', socket.id);
//     socket.emit('message', 'Hello from server! i succeed to connect');

//     io.emit('clients', clients); // שלח את רשימת הלקוחות למנהל

//     socket.on('message', (message) => {
//       console.log(`Message from ${socket.id}: ${message}`);
//       io.emit('message', message);
//     });

//     socket.on('privateMessage', ({ message, user }) => {
//       io.to(user).emit('message', message);
//     });

//     socket.on('disconnect', () => {
//       console.log(`${socket.id} disconnected`);
//       clients = clients.filter(client => client !== socket.id);
//       io.emit('clients', clients); // עדכן את רשימת הלקוחות לאחר ניתוק
//     });

//     socket.on('setUsername', (username) => {
//       console.log(`User ${socket.id} set username to ${username}`);
//     });
//   });

//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);

//   const StyledFab = styled(Fab)({
//     position: 'absolute',
//     zIndex: 1,
//     bottom: -700,
//     left: 30,
//     margin: '0 auto',
//   });

//   return (
//     <React.Fragment>
//       <IconButton aria-label="admin chat" size="large" onClick={handleClickOpen('paper')}>
//         <Fab color="primary" aria-label="admin-chat">
//           <Badge badgeContent={clients.length} color="secondary">
//             <ChatIcon />
//           </Badge>
//         </Fab>
//       </IconButton>

//       <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
//         <DialogTitle id="scroll-dialog-title">
//           <IconButton aria-label="exit" onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//           Admin Chat
//         </DialogTitle>
//         <DialogContent dividers={scroll === 'paper'}>
//           <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
//             <div>
//               {clients.map((client, index) => (
//                 <Button key={index} onClick={() => handleUserSelect(client)}>
//                   {client}
//                 </Button>
//               ))}
//               {messages.map((msg, index) => (
//                 <SingaleMessageComponent key={index} message={msg} />
//               ))}
//             </div>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Box component="form" onSubmit={sendMessage} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
//             <TextField id="outlined-multiline-flexible" label="Message" multiline maxRows={4} style={{ width: '350px' }} value={message} onChange={(e) => setMessage(e.target.value)} />
//             <Button type="submit" endIcon={<SendIcon />}>
//               Send
//             </Button>
//           </Box>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
// // שליחת הודעה ללקוח ספציפי
// // כדי לשלוח הודעה ללקוח ספציפי, תוכל להשתמש באירוע privateMessage ולהוסיף את הקוד המתאים בשרת:

// // javascript
// // Copy code
// // io.on('connection', (socket) => {
// //     clients.push(socket.id);
// //     console.log('A new user has connected', socket.id);
// //     socket.emit('message', 'Hello from server! i succeed to connect');

// //     io.emit('clients', clients); // שלח את רשימת הלקוחות למנהל

// //     socket.on('message', (message) => {
// //         console.log(`Message from ${socket.id}: ${message}`);
// //         io.emit('message', message);
// //     });

// //     socket.on('privateMessage', ({ message, user }) => {
// //         io.to(user).emit('message', message);
// //     });

// //     socket.on('disconnect', () => {
// //         console.log(`${socket.id} disconnected`);
// //         clients = clients.filter(client => client !== socket.id);
// //         io.emit('clients', clients); // עדכן את רשימת הלקוחות לאחר ניתוק
// //     });

// //     socket.on('setUsername', (username) => {
// //         console.log(`User ${socket.id} set username to ${username}`);
// //     });
// // });

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';
import SingaleMessageComponent from '../chat/singaleMessegeComponent';

const socket = io('http://localhost:5000');

export default function AdminChat() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [clients, setClients] = React.useState([]);
  const [selectedClient, setSelectedClient] = React.useState(null);

  React.useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, { text: message, author: 'client', timestamp: new Date().toLocaleTimeString() }]);
    });

    socket.on('clients', (clients) => {
      setClients(clients);
      console.log("clients::", clients);
    });

    return () => {
      socket.off('message');
      socket.off('clients');
    };
  }, []);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (selectedClient) {
      socket.emit('privateMessage', { message, user: selectedClient });
      setMessages((prevMessages) => [...prevMessages, { text: message, author: 'Server', timestamp: new Date().toLocaleTimeString() }]);
    } else {
      socket.emit('message', message);
    }
    setMessage('');
  };

  const handleUserSelect = (client) => {
    setSelectedClient(client);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    bottom: -700,
    left: 30,
    margin: '0 auto',
  });

  return (
    <React.Fragment>
      <IconButton aria-label="admin chat" size="large" onClick={handleClickOpen('paper')}>
        <Fab color="primary" aria-label="admin-chat">
          <Badge badgeContent={clients.length} color="secondary">
            <ChatIcon />
          </Badge>
        </Fab>
      </IconButton>

      <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title">
          <IconButton aria-label="exit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          Admin Chat
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div>
              {clients.map((client, index) => (
                <Button key={index} onClick={() => handleUserSelect(client)}>
                  {client}
                </Button>
              ))}
              {messages.map((msg, index) => (
                <SingaleMessageComponent key={index} message={msg} />
              ))}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box component="form" onSubmit={sendMessage} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
            <TextField id="outlined-multiline-flexible" label="Message" multiline maxRows={4} style={{ width: '350px' }} value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button type="submit" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
