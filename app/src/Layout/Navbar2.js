import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
  <Navbar.Brand className="d-inline-p-2 bg-dark text-white" href="#home">InfiBox</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="#home">Home</Nav.Link>
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="#link">Signup</Nav.Link>
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="#link">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}