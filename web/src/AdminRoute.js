import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from './auth/authapi'

const AdminRoute = ({component : Component, ...rest}) => (
        <Route {...rest} render={props => isAuthenticated() && isAuthenticated().user.role===0 ? (
    <Component {...props} />
)
 : (
        <Redirect to={{pathname: '/'}} />
) } />
);

export default AdminRoute;
