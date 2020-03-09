import React, {Component, Fragment} from 'react'
import './Terms.css'
import {Container} from 'react-bootstrap';
import {Footer} from './Footer'
import {NavBar} from './NavBar'

export class Terms extends Component {
    render() {
        return (
        <Fragment>
            <NavBar/>
            <Container>
                <div>
                <b>J) Coupon code: (Rs.100 off coupon)</b>
                <ol>
                    <li>Minimum order value for redeeming the coupon is Rs.1000.</li>
                    <li>Coupon code can be redeemed only once per user.</li>
                    <li>Coupon code will be unlocked within 72 hrs after the complete order is delivered to the user.</li>
                    <li>Coupon code is valid on Grofers till 31 March 2020.</li>
                    <li>Coupon code can’t be clubbed with any coupon code/bank offer.</li>
                    <li>Coupon code is not applicable with use of Orange Cash received before 9 August 2019.</li>
                    <li>Coupon code can be clubbed with Orange Cash received on and after 9 August 2019 to avail additional 10% discount on the entire order.</li>
                    <li>Coupon code will not be applicable on oil, ghee, baby food products, club membership and delivery charges.</li>
                </ol>
                <hr/>
                <b>Communication with Company</b>
                    <p>If you wish to correct or update any information you have provided, you may do so online, on the website itself. Alternatively, you may contact the Company to correct or update such information by sending an e-mail to: info@grofers.com.</p>
                    <p>In the event of loss of access to the website, you may contact the Company by sending an e-mail to: info@grofers.com.</p>
                    <p>In the event you wish to report a breach of the Privacy Policy, you may contact the designated Grievance Officer of the Company at:</p>
            
                <p>Sumit Chhimwal</p>
                <p>Grofers India Private Limited</p>
                <p>Plot 64H, Sector 18</p>
                <p>Gurgaon, Haryana – 122011</p>
                <p>Email address: info@grofers.com</p>
                </div>
            </Container>
            <Footer/>
        </Fragment>
          );
    }
}