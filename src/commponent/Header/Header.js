import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, Logout} = useAuth()
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
      <Nav className="mx-auto d-flex aling-items-center">
      <Nav.Link as={Link} to="/Chat" className="mx-md-4 mx-2 fs-4" ><i className="far fa-comments"></i></Nav.Link>
      <Nav.Link as={Link} to="/global" className="mx-md-4 mx-2 fs-4" ><i className="far fa-newspaper"></i></Nav.Link>
      <Nav.Link as={Link} to="/addFriend" className="mx-md-2 mx-1 fs-4" ><i className="fas fa-user-plus"></i></Nav.Link>
      {
        user.photoURL &&  <div className="my-auto mx-3" ><img src={user.photoURL} alt="" width="37px" style={{borderRadius:"50%"}} /> <Button onClick={Logout} variant="danger" className="ms-3">Logout</Button> </div>
      }
      </Nav>
      </Container>
    </Navbar>
    );
};

export default Header;