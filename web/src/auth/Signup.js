import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import './form.css'
export class Signup extends Component {
     constructor(props) {
        super(props);
            this.state={
                name:'',
                email:'',
                password:'',
                error:'',
                success:false
            }
        this.namechange = this.namechange.bind(this); 
        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.clickSubmitsignup = this.clickSubmitsignup.bind(this);
   }

 namechange= event => {
        this.setState({
                    ...this.state.name,
                    name: event.target.value,error:false
                });
    }
    
 emailchange = event => {   
        this.setState({
                    ...this.state.email,
                    email: event.target.value,error:false
                });
     }
 passwordchange = event => {     
        this.setState({
                    ...this.state.password,
                    password : event.target.value,error:false
                });     
    }


clickSubmitsignup = event => {
        event.preventDefault();
        fetch('http://localhost:8000/api/signup',{
            method: "POST",
            headers:{
                Accept: 'application/json',
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name : this.state.name,email : this.state.email,password : this.state.password})
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.dir(err);
            
        })
        .then(data => {
            if(data.error){
                this.setState({
                    ...this.state.name,
                });
                this.setState({
                    ...this.state.email,
                    
                });
                this.setState({
                    ...this.state.password,
                    
                });
                this.setState({error:data.error,
                success:false});
                console.log(this.state.success);
            } else{
                 this.setState({
                    ...this.state.name,
                    name: ''
                }); 
                this.setState({
                    ...this.state.email,
                    email: ''
                }); 
                this.setState({
                    ...this.state.password,
                    password: ''
                });
                 this.setState({
                    error: ''
                });
                 this.setState({
                    success : true
                });
                console.log(this.state.success);
                
            }
        })
        
    };



    render(){
        return(

        <Form className="form">
        <div className="alert alert-danger" style={{display: this.state.error? "" : "none"}}>{this.state.error}</div>
        <div className="alert alert-info" style={{display: this.state.success? "" : "none"}}>New account is created. Please signin</div>
            <FormGroup className="form">
                <Label>Name</Label>
                <Input onChange={this.namechange} value={this.state.name}  type="name" placeholder="Name"/>
            </FormGroup>
            <FormGroup className="form">
                <Label>Email</Label>
                <Input onChange={this.emailchange} value={this.state.email}  type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup className="form">
                <Label>Password</Label>
                <Input onChange={this.passwordchange} value={this.state.password}  type="password" placeholder="Password"/>
            </FormGroup>
            
              <Button className="btn-lg btn-dark btn-block" onClick={this.clickSubmitsignup}>Sign up</Button>
                <div className="text-center pt-3">Already a member? <a href="/">Login</a></div>
        </Form>  
            
        )
    }
    
}


