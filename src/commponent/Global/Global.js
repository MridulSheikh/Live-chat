import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Post from '../post/Post';
const Global = () => {
    return (
        <Container>
           <Row className="mt-3">
           <Col md={6} sm={12}>
          <Post></Post>
           </Col>
           <Col md={6} sm={12}>
           
           </Col>
           </Row>
        </Container>
    );
};

export default Global;