// Dependencies
import React, { Component } from 'react';

// Add stylesheet
// import '../node_modules/bulma/css/bulma.min.css';
import './App.css';

class App extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            hadErrorLoading: false
        };
    }

    componentWillMount() {
        fetch('https://api.github.com/search/users?q=location:Angola&per_page=100')
        .then(res => res.json())
        .then(({ items, total_count }) => {
            // Save the results in the current state
            this.setState({ 
                users: items,
                totalUsers: total_count
            });
        })
        .catch(err => this.setState({ hadErrorLoading: true }));
    }

    render() {

        // Users
        const profile = this.state.users.map((user) => {
            return (
                <article className="column user" key={user.node_id}>
                    <figure className="user__profile-photo">
                        <a href={ '/profile/' + user.login }>
                            <img src={user.avatar_url} alt={user.login} className="user__profile-photo__img"/>
                        </a>
                    </figure>
                    <h1 className="user__name">
                        <a href={ '/profile/' + user.login}>
                            {user.login}
                        </a>
                    </h1>
                </article>
            );
        });

        return(
            <div>
                <div className="wrap">
                    <div className="listing-items">
                        { profile }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
