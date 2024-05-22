import React from 'react';
import SingaleMessageComponent from './singaleMessegeComponent';

const ChatComponent = () => {
  const messages = [
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
    // Add more messages here
  ];

  return (
    <div>
      {messages.map((message, index) => (
        <SingaleMessageComponent key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatComponent;