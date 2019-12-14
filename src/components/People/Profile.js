import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            profile: []
        };
    }

    componentDidMount() {
    const userid = this.props.match.params.id;
        const URL = `http://localhost:3010/profile/${userid}`;
        Axios.get(URL)      
                .then(res => {const query = res.data;
                    this.setState({ profile: query});
        })
    }

    render() {
        const profile = this.state.profile;
        return(
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{profile.first_name} {profile.last_name}</Card.Title>
                    <Card.Text>@{profile.username}</Card.Text>
                    <Card.Text>{profile.age}</Card.Text>
                    <Card.Text>{profile.email}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

}

export default withRouter(Profile);