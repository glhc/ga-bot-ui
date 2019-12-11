import react, { useState, useEffect } from 'react';

function Message(props) {
  
  return (
    <StyledMessage>
      <div className="username">{username}</div>
      {content}
    </StyledMessage>
  );
};

export default Message
