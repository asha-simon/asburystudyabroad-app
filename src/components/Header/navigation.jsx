
import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return(
<Navbar className="nav-menu" id="nav-menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
 <Container>
  <Navbar.Toggle className="mobile-nav-toggle" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mobile-nav">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about-us">About</Nav.Link>
      <Nav.Link href="/main-courses">Courses</Nav.Link>
      <Nav.Link href="/destinations">Destinations</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="/contact-us">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default Navigation;