import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {authenticate, isAuthenticated} from '../auth/authapi'
import {ListGroup, Col, Row, Container,Tab} from 'react-bootstrap'
import {User} from './User'



export class Profile extends Component {
     constructor(props) {
        super(props);
            this.state={
                
            }
        
    }


    render(){
    
        return(
        	<Container>
        	<Tab.Container id="list-group-tabs-example" defaultActiveKey="#user" >
        	<Row>
              <Col sm={3}>
		   	 	<ListGroup>
 				 <ListGroup.Item action href="#user">Account</ListGroup.Item>
 				 <ListGroup.Item action href="#orders">Orders</ListGroup.Item>
 				 <ListGroup.Item action href="#1">Edit Profile</ListGroup.Item>
 				 <ListGroup.Item action href="#2">Purchase History</ListGroup.Item>
 				
				</ListGroup>
			  </Col>
			   <Col>
                <br/>
            	<Tab.Content>
        			<Tab.Pane eventKey="#user">
        			  <User/>
       				 </Tab.Pane>
       				 <Tab.Pane eventKey="#orders">
          			  
     				 </Tab.Pane>
     			 </Tab.Content>
              </Col>

            </Row>
            </Tab.Container>
            </Container>
        )
    }
    
}

            