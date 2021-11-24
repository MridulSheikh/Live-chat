import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Header = () => {
  /*<Navbar collapseOnSelect expand="lg" style={{background: "linear-gradient(121deg, rgba(36,76,138,1) 0%, rgba(0,45,147,1) 100%)"}} variant="dark" >
          <Container>
          <Navbar.Brand as={NavLink} to="/" href="#home">Tecnover.s</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-md-5">
            </Nav>
            <Nav>
            <Nav.Link as={NavLink} to="/Chat" className="mx-md-4 fs-4" ><i className="far fa-comments"></i></Nav.Link>
            <Nav.Link as={NavLink} to="/global" className="mx-md-4 fs-4" ><i className="far fa-newspaper"></i></Nav.Link>
            <Nav.Link as={NavLink} to="/addFriend" className="mx-md-4 fs-4" ><i className="fas fa-user-plus"></i></Nav.Link>
            <Nav.Link as={NavLink} to="/addFriend" className="mx-md-4 fs-4" ><i className="fas fa-sign-in-alt"></i></Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className="mx-md-4 fs-4" >Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>*/
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
      <Nav className="mx-auto">
      <Nav.Link as={Link} to="/Chat" className="mx-md-4 mx-2 fs-4" ><i className="far fa-comments"></i></Nav.Link>
      <Nav.Link as={Link} to="/global" className="mx-md-4 mx-2 fs-4" ><i className="far fa-newspaper"></i></Nav.Link>
      <Nav.Link as={Link} to="/addFriend" className="mx-md-2 mx-1 fs-4" ><i className="fas fa-user-plus"></i></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    );
};

export default Header;