// import React, { PureComponent as Component } from 'react';
import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class People extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            friends: [],
            input: '',
            filteredFriends: []
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

    render() {
        const {friends} = this.state;
        this.friends = friends
            .filter(item => {
                const relatedFieldsArray = this.getRelatedFields(item);
                const searched = relatedFieldsArray.map(item => item.toLowerCase().includes(this.state.input.toLowerCase()));
                return searched.includes(true) ? item : null;
            })
            .map((item, key) =>
                <Col xs={4} md={3}>
                    <a href={`/profile/${item.id}`}>
                        <Card>
                            <Card.Img variant="top" src="https://www.placecage.com/c/300/300" />
                            <Card.Body>
                            <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                            <Card.Text>
                                @{item.username}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            );

        return(
            <div>
                <h1>search</h1>
                <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
                <h1>People:</h1>
                <Container>
                    <Row>
                        {this.friends}
                    </Row>
                </Container>
            </div>
        )
    }

}
