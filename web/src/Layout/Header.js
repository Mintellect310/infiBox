import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {Form, FormGroup, Button, Label, Input} from 'reactstrap'
import './Nav.css'


export class Header extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">            
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
  </Navbar.Collapse>

   <Form inline className="search">
       <Input type="text" placeholder="Search" />
      <Button variant="outline-light">Search</Button>
   
    </Form>
</Navbar>
        )
    }
}