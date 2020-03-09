import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./Layout/Navbar";
import {Navigation} from "./Layout/Navbar";
import {Header} from "./Layout/Header";
import {Signup} from "./auth/Signup"
import {Login} from "./auth/Login"
import {ProductCard} from './ShopPage/ProductCard'
import {Shop} from './ShopPage/Shop'
import './App.css'
import {Cart} from './cart/Cart'
import {Profile} from './Profile/Profile'
import PrivateRoute from './PrivateRoute'

class App extends Component {
    render() {
        const hello = {name: 'mahesh'}
        return (
    
             <BrowserRouter>
             <div className="App">
                <Navigation/>
                <Header/>

            <main style={{marginTop:'64px'}}>
            </main>
           
            </div>
         
            <Switch>
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path='/cart' exact component={Cart}/>
             
                <PrivateRoute path='/profile' exact component={Profile}/>
            </Switch>
        </BrowserRouter>
        )
    }
}

export default App;
