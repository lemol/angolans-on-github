import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

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
            // Save the result in the current state
            this.setState({ users: items, totalUsers: total_count });
            console.log(items);
        })
        .catch(err => console.log(err));
    }

    render() {

        const profile = this.state.users.map((user) => {
            return (
                <Col>
                    {user.login}
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
