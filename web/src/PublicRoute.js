import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from './auth/authapi'
import Navbar from "./Layout/Navbar";
import {Navigation} from "./Layout/Navbar";
import {Header} from "./Layout/Header";

const PublicRoute = ({component : Component, ...rest}) => (
        <Route {...rest} render={props => '1' ? (
<div>
             <div className="App">
                <Navigation/>
                <Header/>

            <main style={{marginTop:'64px'}}>
            </main>
           
            </div>
    <Component {...props} />
    </div>
)
 : (
        <Redirect to={{pathname: '/'}} />
) } />
);

export default PublicRoute;
