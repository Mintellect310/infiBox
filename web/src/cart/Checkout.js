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
       this.getTotal = this.getTotal.bind(this)
    }

    getTotal = () => {
    	return this.props.products.reduce((currentValue, nextValue)=> {
    		return currentValue + nextValue.count*nextValue.price
    	}, 0);
    }

    render(){
    
        return(
        	<Fragment>
			<h5>Total : ${this.getTotal()}</h5>           
       		{isAuthenticated() ? (
       				<Button variant="success">Checkout</Button>

       				):
       				
       				 <Alert variant="dark">
   					 	<b>Hey! Let's <a href="/signin">Login</a> to proceed further.</b>
  					 </Alert>
       			}

       			</Fragment>

        )
    }


}