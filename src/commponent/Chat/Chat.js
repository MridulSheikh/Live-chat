import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div>
            <Container>
            <Row xs={3} md={3} className="bg-dark py-3" sticky="top">
            <Col sm><Link to="/"> <h3><i className="fas fa-arrow-left text-light"></i></h3></Link></Col>
            <Col sm><h3 className="text-light">Massages</h3></Col>
            <Col sm><Link to="friendReq"><h3 className="text-light"><i className="fas fa-user-friends"></i></h3></Link></Col>
           </Row>
            </Container>
            <h1>chat section</h1>
        </div>
    );
};

export default Chat;