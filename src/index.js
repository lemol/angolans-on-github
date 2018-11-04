import React from 'react';
import ReactDOM from 'react-dom';
// Import react-router
import { BrowserRouter as Router } from 'react-router-dom';

// Import App component
import App from './App';

ReactDOM.render(
    <Router>
        <App/>
    </Router>, document.getElementById('root'));