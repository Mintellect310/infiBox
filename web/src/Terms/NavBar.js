import React,{Component} from 'react'
import './Terms.css'
import {Navbar,Nav} from 'react-bootstrap'

export class NavBar extends Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">InfiBox</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}