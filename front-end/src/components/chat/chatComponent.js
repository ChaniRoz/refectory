import React, { useState, useEffect } from 'react';
import SingaleMessageComponent from './singaleMessegeComponent';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello', author: 'Alice', timestamp: '10:00 AM' },
    { text: 'Hi', author: 'Bob', timestamp: '10:05 AM' },
    { text: '😀', author: 'Me', timestamp: '10:10 AM' },
    { text: 'Hello everybody', author: 'Alice', timestamp: '10:00 AM' },
    { text: 'How are you', author: 'Bob', timestamp: '10:05 AM' },
    { text: 'Welcome', author: 'Me', timestamp: '10:10 AM' },
    { text: 'Hello', author: 'Alice', timestamp: '10:00 AM' },
    { text: 'Hi', author: 'Bob', timestamp: '10:05 AM' },
    { text: 'Welcome', author: 'Me', timestamp: '10:10 AM' },
    { text: 'Hello', author: 'Alice', timestamp: '10:00 AM' },
    { text: 'Hi', author: 'Bob', timestamp: '10:05 AM' },
    { text: 'Welcome', author: 'Me', timestamp: '10:10 AM' },
  ]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, { text: message, author: 'me', timestamp: new Date().toLocaleTimeString() }]);

    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
    setMessages((prevMessages) => [...prevMessages, { text: message, author: 'Server', timestamp: new Date().toLocaleTimeString() }]);

  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <SingaleMessageComponent key={index} message={msg} />
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;