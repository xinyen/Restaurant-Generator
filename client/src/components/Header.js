import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">

      <Navbar.Brand href="/">EatWhere?</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Submit</Nav.Link>
        <Nav.Link href="/random">Generate</Nav.Link>
        <Nav.Link href="/reset">Reset</Nav.Link>
      </Nav>

    </Navbar>
  );

}

export default Header;
