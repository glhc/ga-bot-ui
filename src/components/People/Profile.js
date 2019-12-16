import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            profile: [],
            following: [],
            followers: [],
        };
    }

    componentDidMount() {
    const userid = this.props.match.params.id;
        const URL = `http://localhost:3010/profile/${userid}`;
        Axios.get(URL)      
                .then(res => {const query = res.data;
                    this.setState({ 
                        profile: query.user,
                        following: query.following,
                        followers: query.followers
                    });
            console.log(this.state)
        })
    }

    renderList(arr) {
        if(arr.length < 1) {
            this.lonely = 
                <Card>
                    <Row>
                        <Col md={4}>
                            <Image src="https://www.placecage.com/c/75/75" roundedCircle />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                            <Card.Title>No ones here :C</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            return this.lonely
        } else {
            this.list = arr
                .map((item, key) =>
                    <a href={`/profile/${item.id}`}>
                        <Card>
                            <Row>
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
                    </a>
                )
            return this.list
        }
    }

    render() {
        const profile = this.state.profile;

        return(
            <Container>
                <Row>
                    <Col md={3}>
                        <h1>following {this.state.following.length}</h1>
                        {this.renderList(this.state.following)}
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{profile.first_name} {profile.last_name}</Card.Title>
                                <Card.Text>@{profile.username}</Card.Text>
                                <Card.Text>{profile.age}</Card.Text>
                                <Card.Text>{profile.email}</Card.Text>
                            </Card.Body>
                        </Card>
                        <h1>put posts here</h1>
                    </Col>

                    <Col md={3}>
                        <h1>{this.state.followers.length} followers</h1>
                        {this.renderList(this.state.followers)}
                    </Col>

                </Row>
            </Container>
        )
    }

}

export default withRouter(Profile);