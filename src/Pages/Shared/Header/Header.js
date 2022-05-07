import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" className='navbar' >
        <Container>
          <Navbar.Brand as={Link} to="/home" className='text-white'>Car House</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="linkText mb-0  py-2 text-white" as={Link} to="/">Home</Nav.Link>
              {
                user && <> <Nav.Link className="linkText mb-0 py-2 text-white" as={Link} to="/manageInventoris">Manage Inventories</Nav.Link>
                <Nav.Link className="linkText mb-0 py-2 text-white" as={Link} to="/addCar" >Add Car</Nav.Link> 
                <Nav.Link className="linkText mb-0 py-2 text-white" as={Link} to="/mycars" >My Cars</Nav.Link> 
                </>
              }
              <Nav.Link className="linkText mb-0  py-2 text-white" as={Link} to="/blogs">Blogs</Nav.Link>
              
            </Nav>
            <Nav>
              {
                user ? <>

                  <Nav.Link className="linkText mb-0 py-2 text-white" onClick={() => signOut(auth)}>Sign out</Nav.Link>

                </> : <>
                  <Nav.Link className="linkText mb-0 py-2 text-white" as={Link} to="Login">Login</Nav.Link>
                  <Nav.Link className="linkText mb-0 py-2 text-white" as={Link} to="/register">
                    Register
                  </Nav.Link>
                </>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;