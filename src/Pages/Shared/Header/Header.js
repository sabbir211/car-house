import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky='top' className='navbar' >
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Car House</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="linkText mb-0 px-3 mx-2 border-bottom py-2 text-white" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="linkText mb-0 px-3 mx-2 border-bottom py-2 text-white" as={Link} to="/blog">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="linkText mb-0 px-3 mx-2 border-bottom py-2 text-white" as={Link} to="Login">Login</Nav.Link>
              <Nav.Link className="linkText mb-0 px-3 mx-2 border-bottom py-2 text-white" as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;