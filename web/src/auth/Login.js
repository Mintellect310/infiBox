import React,{Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import './form.css'
import {authenticate, isAuthenticated} from './authapi'

export class Login extends Component {
     constructor(props) {
        super(props);
            this.state={
                email:'',
                password:'',
                error:'',
                success:false,
                loading:false,
                redirectToReferrer:false,
            }
        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.clickSubmitsignin = this.clickSubmitsignin.bind(this);
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

clickSubmitsignin = event => {
       
     this.setState({
                    ...this.state.loading,
                   loading: true
                });  
        
        fetch('http://localhost:8000/api/signin',{
            method: "POST",
            headers:{
                Accept: 'application/json',
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ email : this.state.email,password : this.state.password})
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
                    ...this.state.email,
                });
               
                this.setState({
                    ...this.state.password,
                    
                });
                this.setState({error:data.error,
                loading:false});
                console.log(this.state.loading);
            } else{
                
               authenticate(data, () => {
                  this.setState({
                    ...this.state.email,
                });
               
                this.setState({
                    ...this.state.password,
                    
                });
                
                this.setState({
                   redirectToReferrer : true
                });  
              })
               
            }
        })
        
    };


    render(){
    
        return(

        <Form className="form">
        <div className="alert alert-danger" style={{display: this.state.error? "" : "none"}}>{this.state.error}</div>
        {this.state.loading && <div className="alert alert-info" style={{display: this.state.loading? "" : "none"}}>Continue Shopping</div>}
            <FormGroup className="form">
                <Label>Email</Label>
                <Input onChange={this.emailchange} value={this.state.email} type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup className="form">
                <Label>Password</Label>
                <Input onChange={this.passwordchange} value={this.state.password} type="password" placeholder="Password"/>
            </FormGroup>
            <Button type="submit" onClick={this.clickSubmitsignin} className="btn-lg btn-dark btn-block">Log in</Button>
            <div className="text-center pt-3">Not a member? <a href="/">Sign up</a></div>

        </Form>  
            
        )
    }
    
}
