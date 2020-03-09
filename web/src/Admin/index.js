import React , {Component,Fragment} from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Card , CardColumns, Grid} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {Form, FormGroup, Button, Label, Input} from 'reactstrap'
import {ShopAdd} from './ShopAdd.js'

export class Admin extends Component {
    render() {
      return (
          <ShopAdd/>      
        )
    }
}
