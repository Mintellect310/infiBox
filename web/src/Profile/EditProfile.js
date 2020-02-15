import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {authenticate, isAuthenticated} from '../auth/authapi'
import {ListGroup, Col, Row, Container,Card} from 'react-bootstrap'


const {user: {_id,name,email,role}}= isAuthenticated()
export class User extends Component {
     constructor(props) {
        super(props);
            this.state={
                
            }
        
    }


    render(){
    
        return(
        	<Card>
        		 <Card.Header><b>User Info</b></Card.Header>
 				 <Card.Body>
 				 	<b>Name</b>: {name}
 				 	<hr/>
 				 	<b>Email</b>:  {email}
 				 	
 				 </Card.Body>
			</Card>
        )
    }
    
}
