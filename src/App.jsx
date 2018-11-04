import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <div>Home</div>
    </div>
);

const Stats = () => (
    <div>
        <div>Stats</div>
    </div>
);

const Profiles = () => (
    <div>
        <div>Profiles</div>
    </div>
);

class App extends Component {

    componentWillMount() {
        fetch('https://api.github.com/search/users?q=location:Angola')
        .then(res => res.json())
        .then(users => console.log(users))
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

                <Route exact path="/" component={Home}/>
                <Route path="/stats" component={Stats}/>
                <Route path="/profiles" component={Profiles}/>
            </div>
        )
    }
}

export default App;