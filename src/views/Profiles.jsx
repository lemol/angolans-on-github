import React from 'react';
import { Row, Col } from 'react-bootstrap';

// View body
const Profiles = ({ users }) => (
    <div>
        <h1>Profiles</h1>

        <Row>
            <Col className="card">
                <img className="card-img-top" src=".../100px180/" alt="User"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://google.com" className="btn btn-primary">Go somewhere</a>
                </div>
            </Col>
        </Row>
    </div>
);

// Export Stats componet/view
export default Profiles;