import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Message extends React.Component {
    constructor() {
        super(); 
        this.state = {
          messages: []
        }; 
    }
    
    componentDidMount() {
      const MESSAGE_URL = 'http://localhost:3010/messages';
      axios.get(`${MESSAGE_URL}.json`)
        .then(res => {
          const query = res.data;
          this.setState({ messages: query });
        })
    }

    // sendMessage(text) {
    //   this.currentUser.sendMessage({
    //     text,
    //     roomId: this.setState
    //   })
    // }

    render () {
      return (
        <div>
          <MessageList messages={this.state.messages}/>
          <SendMessageForm/>
        </div>
      )
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <div>
                              {message.userId}
                            </div>
                            <div>
                              {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

class SendMessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text" />
      </form>
    )
  }
}

export default Message;
