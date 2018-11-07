import React, { Component } from 'react';

class App extends Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            profiles: []
        };
    }

    componentWillMount() {
        fetch('https://api.github.com/search/users?q=location:Angola&per_page=100')
        .then(res => res.json())
        .then(({ items, total_count }) => {
            // Save the result in the current state
            this.setState({ profiles: items, totalUsers: total_count });
            console.log(items);
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <div className="container">
                </div>
            </div>
        )
    }
}

export default App;
