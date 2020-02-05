import React, {Component, Fragment} from 'react'
import {Card , Button} from 'react-bootstrap'


export class ProductCard extends Component {
   render(){
   	return(
   		<Card style={{width: '18rem'}}>
 <Card.Img variant="top" src={`http://localhost:8000/api/product/photo/{this.props.item._id}`} />
  <Card.Body>
    <Card.Title>{this.props.item.name}</Card.Title>
    <Card.Text inline>
    	${this.props.item.price}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
    <Button variant="primary">View cart</Button>
  </Card.Body>
</Card>
		)
   }



}
