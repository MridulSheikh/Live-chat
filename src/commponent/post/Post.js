import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
const Post = () => {
    const {user} = useAuth()
    return (
        <div>
        <Card>
        <Card.Header> <img src={user.photoURL} width="40px" style={{borderRadius:"50%"}} /> <span className="ms-3">{user.email}</span> </Card.Header>
       <Card.Body>
     <div class="mb-3">
      <input type="file" className="my-3"/>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
     <Button variant="dark" className="w-100">POST NOW</Button>
      </Card.Body>
     </Card>
        </div>
    );
};

export default Post;