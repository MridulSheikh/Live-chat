import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import img from '../../utilities/img/user-icon.png'
const Login = () => {
    const {singin} = useAuth();
    const location = useLocation();
    const Navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
       singin()
        .then(result => {
            Navigate(redirect_uri);
        })
}

    return (
        <div className="mt-5">
            <Container className="my-auto">
            <Row>
              <Col md={6}>
              <img src={img} alt="" width="100%" />
              </Col>
              <Col md={5} className="my-auto">
             <div className="mt-5">
             <h1 className="mb-3">Please login to enter live chat</h1>
             <Button onClick={handleGoogleLogin} variant="secondary">Continue with google</Button>
             <img src="" alt="" />
             </div>
              </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;