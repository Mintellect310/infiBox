import React, {Component, Fragment} from 'react'
import {Col, Row, Form, Button, FormControl} from 'react-bootstrap'
import './search.css'
export class Search extends Component{
	
		constructor(props){
			super(props);
			this.state={
				data : {categories : [],
						category:'',
						search:'',
						results:[],
						searched : false
					 },
			
			}
		}

	loadCategories = () => {
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
			if(data.error){
				console.log(data.error)
			}else{
				this.setState({...data, categories : data})

			}
		})
	}
	// searchData = () => {
	// 	//console.log(this.state.search, this.state.category);
	// }
	searchSubmit = e => {
		e.preventDefault()
		//searchData()
	}

	componentDidMount(){
		this.loadCategories();
	}
	handleChange = name => event => {
		this.setState({...this.state.data, [name]: event.target.value, searched: false})
	}
	render(){
		const {categories, category, search, results, searched} = this.state.data;
		return(
			<div>
					 <Form >
						 <Row>
			 				<Col sm={8}>
     						 <FormControl type="text" placeholder="Type Something" className="mr-sm-2 " />
     						</Col>
     						<Col>
     						 <Button variant="outline-dark">Search</Button>
     						 </Col>
     					 </Row>
  					 </Form>
				{JSON.stringify(this.state.categories)}
			</div>	
			)
	}
}