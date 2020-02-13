import React, {Component, Fragment} from 'react'
import {Card , Button} from 'react-bootstrap'
import {addItem} from '../cart/cartHelpers'


export class ProductCard extends Component {
               constructor(props) {
        super(props);
            this.state={
                redirect: ''
            }
        this.addToCart = this.addToCart.bind(this);
       
    }

    addToCart = () => {
      addItem(this.props.item, () => {
            this.setState({redirect : true})
      })
    }

   render(){
   	return(
   		<Card style={{width: '15rem'}}>
 <Card.Img variant="top" src={`http://localhost:8000/api/product/photo/{this.props.item._id}`} />
  <Card.Body>
    <Card.Title>{this.props.item.name}</Card.Title>
    <Card.Text inline>
    	${this.props.item.price}
    </Card.Text>
    <Button onClick={this.addToCart} variant="primary">Add to cart</Button>
    <Button variant="primary">View cart</Button>
  </Card.Body>
</Card>
		)
   }
}
