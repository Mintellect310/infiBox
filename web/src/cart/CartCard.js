import React, {Component, Fragment} from 'react'
import {Card , Button} from 'react-bootstrap'
import {removeItem, addItem, updateItem} from './cartHelpers'
import {Row, Col, Container} from 'react-bootstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap'



export class CartCard extends Component {
               constructor(props) {
        super(props);
            this.state={
                redirect: '',
                count:this.props.item.count,
            }
        this.addToCart = this.addToCart.bind(this);
        this.showCartUpdateOptions= this.showCartUpdateOptions.bind(this);
        this.deletenow= this.deletenow.bind(this)
       
    }


    addToCart = () => {
      addItem(this.props.item, () => {
            this.setState({redirect : true})
      })
    }

    increment = () =>{
       this.setState({count: this.state.count<1? 1: (this.state.count-(-1))})
      
     }
    decrement = () => {
       this.setState({count: this.state.count<2? 1: (this.state.count-1)})
     }

    showCartUpdateOptions = cartUpdate => {
      return cartUpdate;
    }

     productDelete = showDelete  => {
      return showDelete;
    }
    
    componentDidUpdate(){
       updateItem(this.props.item._id, this.state.count)
    }
   
    deletenow=()=>{
      this.props.onDelete(this.props.item._id);
      removeItem(this.props.item._id)
   }

   render(){
 
   	return(
      <Fragment>
        <Card>
        <br/>
          <Row>
            <Col xs lg="3">
            <Card.Img variant="left" src={`http://localhost:8000/api/product/photo/{this.props.item._id}`} />
            </Col>

            <Col> 
            <h6>{this.props.item.name}</h6>
            <p>₹{this.props.item.price}</p>
            {(this.showCartUpdateOptions(this.props.cartUpdate)) && 
                <Row>
                <Col>
                  <Button onClick={this.increment} value={this.state.count} style={{}} variant="outline-success" size="sm">+</Button>
                  <Button variant="info" size="sm">{this.state.count}</Button>
                  <Button onClick={this.decrement} value={this.state.count} style={{}} variant="outline-danger" size="sm">-</Button>             
                </Col>
                </Row>
            }
            <br/>
            {(this.productDelete(this.props.showDelete)) &&
              <Row>
                <Col>
                  
                  <Button onClick={this.deletenow} variant="outline-danger" size="sm">Delete</Button>             
                </Col>
                </Row>
            }

            </Col>
            
          </Row> 
          <br/>  
       </Card>
        <br/>
      </Fragment>
		)
   }
}


CartCard.defaultProps = {
  cartUpdate: false,
  showDelete: false
}

