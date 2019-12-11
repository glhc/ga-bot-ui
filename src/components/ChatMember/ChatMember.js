import react, {useState, useEffect} from 'react';
import StyledChatMember from './StyledChatMember';

function ChatMember(props) {
  return (
    <StyledChatMember href="{props.user.profile}">
      <div className="profile-icon"></div>
      <div className="username">{props.user.username}</div>
    </StyledChatMember>
  );
};

export default ChatMember;
