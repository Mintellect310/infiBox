import React,{Component, Fragment} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {Card, Container} from 'react-bootstrap'
import {authenticate, isAuthenticated} from '../auth/authapi'
import './admin.css'
export class ShopAdd extends Component {
     constructor(props) {
        super(props);
            this.state={
                name:'',
            }
        this.namechange = this.namechange.bind(this);
        
    }

 namechange= event => {
        this.setState({
                    ...this.state.name,
                    name: event.target.value,error:false
                });
    }


    render(){
    const {user: {_id,name,email,role}}= isAuthenticated()
        return(
        <Fragment>
        	<div className="bg">
        	<Container >
        	<br/><br/><br/><br/><br/><br/><br/>
        		<Card className="text-center">
  			<Card.Header><h2>InfiBox</h2></Card.Header>
  				<Card.Body>
  				  <Card.Title><h3>Hey! {name}❤</h3></Card.Title>
    			<Card.Text>
      			<h4>Create a shop </h4>
   				 </Card.Text>
   				 <Container>
   				 <Input type ="text" placeholder="Enter the Shop Name"/>
  				  <br/>
  			     </Container>
   				 <Button variant="primary">Enter</Button>
 				 </Card.Body>
 			 <Card.Footer className="text-muted">Terms and services</Card.Footer>
			</Card>
			</Container>
			</div>
        </Fragment>
            
        )
    }
    
}



