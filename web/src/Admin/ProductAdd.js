import React,{Component, Fragment} from 'react';
import {Button, Label, Input, FormText} from 'reactstrap'
import {Card, FormGroup,Container, Form, Col, Row, InputGroup, Modal} from 'react-bootstrap'
import {authenticate, isAuthenticated} from '../auth/authapi'
import '../auth/form.css'
import axios from 'axios';
import {Navad} from './Nav_admin'
import background from './grocery-store.jpg'

const formData = new FormData();

export class ProductAdd extends Component{
        constructor(props) {
            super(props);
            this.state = {  
                name: "",
                error: '',
                success:false,
                cname:'',
                description:'',
                price: '',
                quantity:'',
                categories: [],
                category:'',
                createdProduct: '',
                sold: 20,
                image:null, 
                validated:false, 
                cvalidate:false,
                shopname:'',
                modalShow:false        
       			 }
          }

      namechange= event => {
        this.setState({
                    ...this.state.name,
                    name: event.target.value,error:false
                });       
      }
      shopnamechange = event => {
        this.setState({...this.state.shopname,
                        shopname: event.target.value, error:false})
      }
      cnamechange= event => {
        this.setState({
                    ...this.state.cname,
                    cname: event.target.value,error:false
                });       
      }
      pricechange= event => {
        this.setState({
                    ...this.state.price,
                    price: event.target.value,error:false
                });        
      }
      descriptionchange= event => {
        this.setState({
                    ...this.state.description,
                    description: event.target.value,error:false
                });     
      }  
      quantitychange= event => {
        this.setState({
                    ...this.state.quantity,
                    quantity: event.target.value,error:false
                });
      }
      categorychange= event => {
        this.setState({
                    ...this.state.category,
                    category: event.target.value,error:false
                });                  
      }  
      imagechange=event =>{
    
         this.setState({
           image: event.target.files[0]
        })
      }          

       getcategory = categoryId => {
        
         fetch(`http://localhost:8000/api/category/${categoryId}`, {
        method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
        
    }
    fetchcategory = () => {

          fetch('http://localhost:8000/api/categories', {
        method: 'GET',
               headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
          .then(data => {
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                this.setState({
                    categories: data,
                    formData: new FormData()
                });
            }
        });

    }
    // componentDidUpdate(){
    //   this.fetchcategory()
    // }
    componentWillMount(){

          this.fetchcategory()
    }

  
   // componentDidUpdate(){
   //               fetch('http://localhost:8000/api/categories', {
   //      method: 'GET',
   //             headers: {
   //          'Accept': 'application/json',
   //          'Content-type': 'application/json',
   //      },
   //  })
   //      .then(response => {
   //          return response.json();
   //      })
   //      .catch(err => console.log(err))
   //        .then(data => {
   //          if (data.error) {
   //              this.setState({ error: data.error });
   //          } else {
   //              this.setState({
   //                  categories: data,
   //                  formData: new FormData()
   //              });
   //          }
   //      });
   // }

   clicksubmit = e => {
         e.preventDefault()
         
         const form = e.currentTarget;
         if (form.checkValidity() === false) {
             e.preventDefault();
             e.stopPropagation();
            }

        this.setState({cvalidate:true})


         this.setState({error: false, success: false});
         
     if(isAuthenticated()){
        const {user: {_id,name, email, role}}  = isAuthenticated();
        const {token} = isAuthenticated();
            
     
         fetch(`http://localhost:8000/api/category/create/${_id}`,{
           method: "POST",
           headers:{
               Accept: 'application/json',
               "Content-Type" : "application/json",
               Authorization: `Bearer ${token}`
           },
           body: JSON.stringify({name:this.state.cname})
         }).then(response => {
           return response.json();
        })
       .catch(err => {
           console.log(err);
           
       })
       .then(data => {
           if(data.error){
                this.setState({
                   ...this.state.cname,
               });
     this.setState({error:data.error,
                 success:false});
           } else{
              //   this.setState({
              //      ...this.state.cname,
              //      cname: ''
              //  }); 
              //    this.setState({
              //      error: ''
              //  });
            this.setState({
                   success : true
            });
           }
       })
         
        }
  }
   clicksubmitproduct = e => {
        e.preventDefault()

        const form = e.currentTarget;
         if (form.checkValidity() === false) {
             e.preventDefault();
             e.stopPropagation();
            }

        this.setState({validated:true})
         
        this.setState({error: false, success: false});
    
       
       
       formData.append('name',this.state.name);
       formData.append('description',this.state.description);
       formData.append('price',this.state.price);
       formData.append('category',this.state.category);
       formData.append('quantity',this.state.quantity);
       formData.append('photo', this.state.image);
           
     if(isAuthenticated()){
        const {user: {_id,name, email, role}}  = isAuthenticated();
         const {token} = isAuthenticated();
            
       axios.post(`http://localhost:8000/api/product/create/${_id}`, formData, {
       headers: {
          'accept': 'application/json',
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
             Authorization: `Bearer ${token}`
        }
        }).then(response => {
                 return response.json();
          })
          .catch(err => {
                 console.dir(err);      
            })
          }   
         }


 render(){
    const {user: {_id,name,email,role}}= isAuthenticated();
        return(
  <div>
  <Fragment>
  <Navad/>
  <Container>
    {/* <h3>Add a Product</h3>
    <h4>Give me some details about the product</h4> */}
  <Row>
      <Col sm={5}>
        <Card style={{width:'60rem'}}>
  <Card.Header as="h5">Add a Product</Card.Header>
  <Card.Body>
     <Card.Title>Give some details about the product.</Card.Title>
    <hr/>
    <Card.Text>
          <Form noValidate validated={this.state.validated} onSubmit={this.clicksubmitproduct}>
    
    <Row>
      <Col>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            onChange = {this.namechange}
            value={this.state.name}
            placeholder="Product Name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            type="number"
            onChange = {this.pricechange}
            value={this.state.price}
            placeholder="Price"
            defaultValue=""
          />
        </Form.Group>
      </Col>
    </Row>  
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control required as="textarea" rows="3" value={this.state.description} onChange={this.descriptionchange} placeholder="Describe your product in few words"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    <Row>   
      <Col> 
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" onChange={this.categorychange}>
               <option>Please select</option>
                    {this.state.categories &&
                        this.state.categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                      ))}      
          </Form.Control>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            required
            type="number"
            onChange = {this.quantitychange}
            placeholder="Quantity"
            value={this.state.quantity}
            defaultValue=""
          />
        </Form.Group>
      </Col>
      </Row>     
      {
      this.state.modalShow && 
      <Modal
      show={this.state.modalShow}
      onHide={() => this.setState({modalShow:false})}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 align="center">Create a category here</h4>
        <br/>
        <Form noValidate validated={this.state.cvalidate} onSubmit={this.clicksubmit}>
        <Form.Group controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            onChange = {this.cnamechange}
            value={this.state.cname}
            placeholder="Category Name"
            defaultValue=""
          />
          {this.state.error ?  
          <div className="alert alert-danger" style={{display: this.state.error? "" : "none"}}>{this.state.error}</div> :
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>}
        </Form.Group>
         <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body> 
    </Modal>
        
        }
    <a>🤔 Couldn't categorize your product?  </a>
    <Button className="but" onClick={() => this.setState({modalShow:true})}>
        <u>Click Here</u>
      </Button>
        <br/><br/>

        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image</Form.Label>
         <Form.Control
            required
            type="file"
            name="photo"
            onChange = {this.imagechange}
            placeholder="Image"
          
            defaultValue=""
          />        
          <FormText color="muted">
          Image must be a size of less than 1mb.
          </FormText>
      </Form.Group>
      
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="Check mark!"
        />
      </Form.Group>
      <hr/>
      <Button type="submit">Submit</Button>
    </Form>

   </Card.Text>
    
  </Card.Body>
 </Card>
</Col>
        </Row>
        </Container>
        </Fragment>
        </div>
       )
    }
  }