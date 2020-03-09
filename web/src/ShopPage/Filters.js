import React , {Component,Fragment} from 'react'
import {ProductCard} from './ProductCard'
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {Form, FormGroup, Button, Label, Input} from 'reactstrap'
import axios from "axios"


export class Filters extends Component { 
  constructor(props){
      super(props)
    this.state={
            categories:[],
            error:'',
            checked: [],
            val:'0',
            limit:0,
            skip:0,
            filteredResults:0,
            prices:[{
                _id:0,
                name:"Any",
                array:[]
            },{
                _id:1,
                name:"Rs.9 to Rs.50",
                array:[9,50]
            },{
                _id:2,
                name:"Rs.50 to Rs.1000",
                array:[50,1000]
            }
            
            ],
            myFilters : { filters : { category :[], price: []}}
    }

        this.handletoggle = this.handletoggle.bind(this);
        this.handleFilters = this.handleFilters.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.loadFilteredResults = this.loadFilteredResults.bind(this);
      
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
                
                });
            }
        });

        this.loadFilteredResults(this.state.myFilters.filters)


    }
   
    componentWillMount(){

          this.fetchcategory()
    }
        
    handlePrice = value =>{
        const data = this.state.prices;
        let array=[]
        
        for(let key in data){
            if(data[key]._id === parseInt(value)){
                array= data[key].array
            }
        }
        return array
    }
    
    handleFilters = (filters, filterBy) => {
        //console.log(filters, filterBy )
        const newFilters = {...this.state.myFilters}
        newFilters.filters[filterBy] = filters
        if(filterBy == "price"){
            let priceValues= this.handlePrice(filters);
             newFilters.filters[filterBy] = priceValues
        }
        this.loadFilteredResults(this.state.myFilters.filters)
        console.log(this.state.myFilters.filters)
        this.setState({myFilters:newFilters})
    }
    
    handlechange=(event)=>{
        this.handleFilters(event.target.value, "price");
        this.setState({val:event.target.value})

    } 
    
    loadFilteredResults = newFilters => {
        console.log(newFilters)
       
        
        fetch('http://localhost:8000/api/products/by/search', {
        method: 'POST',
               headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({limit:this.state.limit, skip: this.state.skip , filters: newFilters})
        })
        .then(response => {
          
            return response.json();
        })
        .catch(err => console.log(err))
        .then(data=>{
            console.log(data)
                this.setState({filteredResults : data.data})

                this.pushdata();

            }
        )
    }


        

    handletoggle = c => () => {
      const currentcategoryId = this.state.checked.indexOf(c)
      
      const newCheckedCategoryId = [...this.state.checked]
      
      if(currentcategoryId === -1){
          newCheckedCategoryId.push(c)
      } else{
          newCheckedCategoryId.splice(currentcategoryId,1)
      }
        
        this.setState({checked: newCheckedCategoryId})
        this.handleFilters(newCheckedCategoryId, 'category')
      }

 
    pushdata = () =>{
      this.props.to_parent(this.state.filteredResults);
    }

   render(){
    const hello={name:'Hello'}
    return(
         <Fragment>
         <Container>        
         <hr/>
            <h6>Prices</h6>
              {this.state.prices.map((p, index) => {
                                            return (
                                                <div className="mr-2 ml-4" key={index}>
                                                    <Input type="radio" name={p} onChange= {this.handlechange} value={p._id} />
                                                    <Label className="form-check-label"
                                                           htmlFor={p._id}>{p.name}</Label>
                                                </div>
                              )
                       })} 


                       <br/>
             <h6>Categories</h6>              
                 {this.state.categories.map((category, index) => {
                                            return (
                                                <div className="form-check pgs-filter-checkbox" key={index}>
                                                    <input type="checkbox" onChange = {this.handletoggle(category._id)} value={this.state.checked.indexOf(category._id === -1)}  className="form-check-input" id={category._id} />
                                                    <label className="form-check-label"
                                                           htmlFor={category._id}>{category.name}</label>
                                                </div>
                                                           )
                            })}
                   <hr/>
         </Container>         
      </Fragment>
    )}
 
}
