// import React, { PureComponent as Component } from 'react';
import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class People extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            friends: [],
            input: '',
            filteredFriends: [],
            selectedUser: {}
        };
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        });
    }

    componentDidMount() {
        const FriendURL = 'http://localhost:3010/read_people';
        Axios.get(FriendURL)      
                .then(res => {const query = res.data;
                    this.setState({ friends: query});
        })
    }

    getRelatedFields = (item) => {
        const output = [];
        const fields = ['first_name', 'last_name', 'email', 'username']
        fields.map(field => output.push(item[field]))
        return output;
    }

    updateSelectedUser = (userid) => {
        const update = this.state.friends[userid - 1];
        this.setState({
            selectedUser: update,
        });
    }

    render() {
        const {friends} = this.state;
        this.friends = friends
            .filter(item => {
                const relatedFieldsArray = this.getRelatedFields(item);
                const searched = relatedFieldsArray.map(item => item.toLowerCase().includes(this.state.input.toLowerCase()));
                return searched.includes(true) ? item : null;
            })
            .map((item, key) =>
                    <span onClick={() => this.updateSelectedUser(item.id)}>
                        <Card>
                            <Row>
                                {/* <Card.Img variant="top" src="https://www.placecage.com/c/300/300" /> */}
                                <Col md={4}>
                                    <Image src="https://www.placecage.com/c/75/75" roundedCircle />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                    <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                                    <Card.Text>
                                        @{item.username}
                                    </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </span>
            );

        return(
            
            <Container>
                <Row>
                    <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
                </Row>
                <Row>
                    <Col md={4}>
                        {this.friends}
                    </Col>
                    <Col md={8}>
                        <h1>hi</h1>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{this.state.selectedUser.first_name} {this.state.selectedUser.last_name}</Card.Title>
                                <Card.Text>@{this.state.selectedUser.username}</Card.Text>
                                <Card.Text>{this.state.selectedUser.age}</Card.Text>
                                <Card.Text>{this.state.selectedUser.email}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}
