import React,{Component , Fragment} from 'react'
import {Card , CardColumns, Grid} from 'react-bootstrap'
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {getCart} from "./cartHelpers";
import {CartCard} from "./CartCard"
import {Button} from 'react-bootstrap'
import {Checkout} from './Checkout'


export class Cart extends Component{
 	constructor(props) {
        super(props);
            this.state={
              items:[],
            }

      this.productupdate= this.productupdate.bind(this)
    }

    productupdate = () => {
      this.setState({...this.state.items, items: getCart()})
    }
    componentWillMount(){
      this.productupdate();
    }
    componentDidMount(){
    this.productupdate();
    }


    handleDelete = itemId => {
    const items = this.state.items.filter(item => item._id !== itemId);
    this.setState({ items: items });
    };

 render(){
   	return(
   		<Fragment>
   		   	<Container>
   				 <Row>
 				  		 <Col sm={8}>
 				  		 	<h5>My Shopping Bag</h5>
 				  		 	<hr/>
 				  		 	 {this.state.items.map((product, i)=>(             
                                 <CartCard item={product} onDelete={this.handleDelete} cartUpdate={true} showDelete={true} key={i}/>            
                  ))}
 				  		 </Col>
   						 <Col >
   						 	<h5>Cart Summary</h5>
   						 	<hr/>
   						 	   <Checkout products={this.state.items}/>
   						 </Col>
 				    </Row>
			   </Container>
   		</Fragment>

   		)
   }
}