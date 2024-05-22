import React from 'react';
import { Paper, Typography } from '@mui/material';

const SingaleMessageComponent = ({ message }) => {
  const isMe = message.author === 'Me';
  const justifyStyle = isMe ? 'flex-end' : 'flex-start';
  const borderColor = isMe ? 'green' : 'blue';

  const messageStyle = {
    padding: 10,
    margin: 10,
    alignSelf: isMe ? 'flex-end' : 'flex-start',
    borderColor: borderColor,
    border: `1px solid ${borderColor}`
  };

  return (
    <div style={{ display: 'flex', justifyContent: justifyStyle }}>
      <Paper style={messageStyle}>
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption">{message.author}</Typography>
        <Typography variant="caption">{message.timestamp}</Typography>
      </Paper>
    </div>
  );
};

export default SingaleMessageComponent;
