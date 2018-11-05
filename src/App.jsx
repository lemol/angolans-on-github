import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// Views / Components
import Stats from './views/Stats';
import Profiles from './views/Profiles';

const Home = () => (
    <div>
        <div>Home</div>
    </div>
);

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
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/stats">Stats</Link>
                    </li>
                    <li>
                        <Link to="/profiles">Profiles</Link>
                    </li>
                </ul>
                
                <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stats" component={Stats}/>
                    <Route path="/profiles" component={Profiles}/>
                </div>
            </div>
        )
    }
}

export default App;