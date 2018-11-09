// Dependencies
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// Add stylesheet
import './App.css';

class App extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        fetch('https://api.github.com/search/users?q=location:Angola&per_page=100')
        .then(res => res.json())
        .then(({ items, total_count }) => {
            // Save the results in the current state
            this.setState({ users: items, totalUsers: total_count });
            console.log(items);
        })
        .catch(err => console.log(err));
    }

    render() {

        const profile = this.state.users.map((user) => {
            return (
                <Col key={user.node_id}>
                    <figure className="user__profile-photo">
                        <img src={user.avatar_url} alt={user.login} className="user__profile-photo__img"/>
                    </figure>
                    <h1 className="user__name">{user.login}</h1>
                </Col>
            );
        });

        return(
            <div>
                <div className="container">
                    <Row>
                        { profile }
                    </Row>
                </div>
            </div>
        )
    }
}

export default App;
