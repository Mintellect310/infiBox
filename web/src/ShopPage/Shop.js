import React , {Component,Fragment} from 'react'
import {Card , CardColumns, Grid} from 'react-bootstrap'
import {ProductCard} from './ProductCard'
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {Form, FormGroup, Button, Label, Input} from 'reactstrap'
import {Filters} from './Filters'

export class Shop extends Component { 
	constructor(props){
	    super(props)
		this.state={
			finaldata:[]
		}
		
	}


	callback = (pulleddata) =>{
			this.setState({finaldata:pulleddata})
	}

   render(){

   	return(
   		<Fragment >
   		   	<Container>
   				 <Row>
 				  		 <Col sm={2}>
 				  		 	<h5>Filters</h5>
 				  		 	<Filters to_parent={this.callback} key={1}/>
 				  		 </Col>
   						 <Col sm={8}>
   						 	<h4>Shop</h4>
   						 	<hr/>
                        
                       <Row>
                       <CardColumns >
                        {this.state.finaldata.map((product, i)=>(
                               
                                 <Col md={3}>
                                 <ProductCard item={product} key={i}/>
                                 </Col>
                         
                          
                           ))}
                           </CardColumns>
   						   </Row>

   						 </Col>
 				    </Row>
			   </Container>
   		</Fragment>

   		)
   }
 
}