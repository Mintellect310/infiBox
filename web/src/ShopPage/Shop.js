import React , {Component,Fragment} from 'react'
import {Card , CardColumns, Grid} from 'react-bootstrap'
import {ProductCard} from './ProductCard'
import ReactDOM from "react-dom";
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
   
   	const product={name:'Hello', price:'28'}
   	return(
   		<Fragment>
   		   	<Container>
   				 <Row>
 				  		 <Col sm={2}>
 				  		 	<h3>Filters</h3>
 				  		 	<Filters to_parent={this.callback}/>
 				  		 </Col>
   						 <Col sm={8}>
   						 	<h3>Shop</h3>
   						 	<hr/>
                        
                       <Row>
                       <CardColumns>
                        {this.state.finaldata.map((product, i)=>(
                               
                                 <Col xs={6} md={4}>
                                 <ProductCard item={product}/>
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