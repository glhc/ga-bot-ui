// import React, { PureComponent as Component } from 'react';
import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Followers extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        const FriendURL = 'http://localhost:3010/read_followers';
        Axios.get(FriendURL)      
                .then(res => {const query = res.data;
                    this.setState({ friends: query});
        })
    }

    render() {
        const {friends} = this.state;
        this.friends = friends.map((item, key) =>
            <Card>
                <Card.Img variant="top" src="https://www.placecage.com/c/300/300" />
                <Card.Body>
                <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                <Card.Text>
                    @{item.username}
                </Card.Text>
                </Card.Body>
            </Card>
        );

        return(
            <div>
                <h1>Followers:</h1>
                <Container>
                    <Row>
                        <CardGroup>
                            {this.friends}
                        </CardGroup>
                    </Row>
                </Container>
            </div>
        )
    }

}
