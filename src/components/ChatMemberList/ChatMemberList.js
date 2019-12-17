import React, {useState, useEffect} from 'react';
import axios from 'axios';

class ChatMemberList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatmemberlists: []
    };
  }

  componentDidMount() {
    const CHATMEMBERLIST_URL = 'http://localhost:3010/chatmemberlists';
    axios.get(`${CHATMEMBERLIST_URL}.json`)
      .then(res => {
        const query = res.data;
        this.setState({ chatmemberlists: query });
      })
  }

  render() {
    const { chatmemberlists } = this.state;
    this.chatmemberlists = chatmemberlists.map((item, key) =>
      <li>userid: {item.user_id} | chatroomid: {item.chatroom_id} | message: {item.message}</li>
    );

    return (
      <div>
        <h1>ChatMemberLists</h1>
        <ul>
          {this.chatmemberlists}
        </ul>
      </div>
    )
  }
}

export default ChatMemberList;
