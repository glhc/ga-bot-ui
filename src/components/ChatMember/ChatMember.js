import React from 'react';
import axios from 'axios';

/*
 * Renders a chatMember's information (name, profile icon, online status, etc.)
 * Belongs to ChatMemberList
 */
class ChatMember extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatmembers: []
    };
  }

  componentDidMount() {
    const CHATMEMBER_URL = 'http://localhost:3010/chatmembers';
    axios.get(`${CHATMEMBER_URL}.json`)
      .then(res => {
        const query = res.data;
        this.setState({ chatmembers: query });
      })
  }

  render() {
    const { chatmembers } = this.state;
    this.chatmembers = chatmembers.map((item, key) =>
      <li>userid: {item.user_id} | chatroomid: {item.chatroom_id} | is_admin: {item.is_admin}</li>
    );

    return (
      <div>
        <h1>ChatMembers</h1>
        <ul>
          {this.chatmembers}
        </ul>
      </div>
    )
  }
}

export default ChatMember;
