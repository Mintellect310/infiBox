import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {signout, isAuthenticated} from "../auth/authapi";
import 'font-awesome/css/font-awesome.min.css';



export class Navigation extends Component{
    render(){
        return(
        
            <Navbar bg="dark" expand="lg">
            
  <Navbar.Brand className="d-inline-p-2 bg-dark text-white" href="#home">InfiBox</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="/">Home</Nav.Link>
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="/shop">Shop</Nav.Link>
     <Nav.Link className="d-inline-p-2 bg-dark text-white" href="/cart"><i className="fa fa-shopping-cart">~Cart</i></Nav.Link>
      {!isAuthenticated() ? <Fragment> 

      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="/signup">Signup</Nav.Link>
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="/signin">Login</Nav.Link>
        </Fragment>
        :
        <Fragment>
      <Nav.Link className="d-inline-p-2 bg-dark text-white" onClick={() => signout(()=>{})} href="/">Logout</Nav.Link>
      <Nav.Link className="d-inline-p-2 bg-dark text-white" href="/profile">Profile</Nav.Link>
      </Fragment>
      }
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

        )
   }
}