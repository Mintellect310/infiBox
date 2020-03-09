import React, {Component, Fragment} from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
import AdminRoute from './AdminRoute'
import PublicRoute from './PublicRoute'
import {Admin} from './Admin/index'
import {Example} from './Admin/Example'
import {ProductAdd} from './Admin/ProductAdd'
import {ShopAdd} from './Admin/ShopAdd'
import {Search} from './ShopPage/Search'

import {Terms} from './Terms/Terms'


class App extends Component {
    render() {
        const hello = {name: 'mahesh'}
        return (
 
            <BrowserRouter>

             
         
            <Switch>

                <PublicRoute path="/" exact component={Shop} />

                
                <PublicRoute path="/shop" exact component={Shop} />
                <PublicRoute path="/signin" exact component={Login} />
                <PublicRoute path="/signup" exact component={Signup} />
                <PublicRoute path='/cart' exact component={Cart}/>

                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path='/cart' exact component={Cart}/>
                <Route path="/terms" exact component={Terms}/>

             

                <PrivateRoute path='/profile' exact component={Profile}/>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/shopadd' exact component={ShopAdd}/>

                <Route path="/example" exact component={Example}/>
                <Route path="/productadd" exact component={ProductAdd}/>
                <Route path="/search" exact component={Search}/>
                

            </Switch>
        </BrowserRouter>
       
        )
    }
}

export default App;
