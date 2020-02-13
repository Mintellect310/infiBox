import React,{Component , Fragment} from 'react'
import {Card , CardColumns, Grid} from 'react-bootstrap'
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {getCart} from "./cartHelpers";
import {CartCard} from "./CartCard"
import {Button, Alert} from 'react-bootstrap'
import {isAuthenticated} from '../auth/authapi'

export class Checkout extends Component {
	        constructor(props) {
        super(props);
            this.state={
                
            }
       
    }
    componentWillReceiveProps(){

    }
    
    

    render(){
    
        return(
        	<Fragment>
			<h5>Total : ₹{this.props.total}</h5>           
       		{isAuthenticated() ? (
       				<Button variant="success">Check out</Button>

       				):
       				
       				 <Alert variant="dark">
   					 	<b>Hey! Let's <a href="/signin">Login</a> to proceed further.</b>
  					 </Alert>
       			}

       			</Fragment>

        )
    }


}