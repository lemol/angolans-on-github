import React from 'react';
import { Row, Col } from 'react-bootstrap';

// View body
const Stats = (props) => (
    <div>
        <h1>Stats</h1>
        
        <Row>
            <Col sm={6} md={3}>Women</Col>
            <Col sm={6} md={3}>Men</Col>
            <Col sm={6} md={3}>Total</Col>
        </Row>
    </div>
);

// Export Stats componet/view
export default Stats;