// import React, { PureComponent as Component } from 'react';
import React from 'react';
import axios from 'axios';

export default class FriendList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        const FRIEND_URL = 'http://localhost:3010/friends';
        axios.get(`${FRIEND_URL}.json`)      
                .then(res => {const query = res.data;
                    this.setState({ friends: query});
        })
    }

    render() {
        const {friends} = this.state;
        this.friends = friends.map((item, key) =>
            <li>userid: {item.user_id} | friendid: {item.friend_id}</li>
        );

        return(
            <div>
                <h1>Friends:</h1>
                <ul>
                    {this.friends}
                </ul>
            </div>
        )
    }

}
