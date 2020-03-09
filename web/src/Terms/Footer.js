import React, {Component} from 'react'
import './Terms.css'
import {Container,Row,Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

export class Footer extends Component {
    render() {
        return (
            <div className="App-header">
            <Container>
                <h6>Online Grocery Shopping India</h6>
                <p>Shop on the go and buy groceries, fresh fruits & vegetables, cakes & other bakery items, meats & seafood, cosmetics, mobiles & accessories, electronics and baby care products. We get it all delivered at your doorstep within hours. You not only save time but also money with our best prices and offers. We get savings.</p>
                <br></br>
                <h6>Single app for all your daily needs</h6>
                <p>Order thousands of products at just a tap; milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices, chocolates, chips, biscuits, Maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, other organic and gourmet products from your neighbourhood stores.</p>
                <br></br>
                <h6>For best of deals order online in cities</h6>
                <p>Delhi, Gurgaon, Mumbai, Bangalore, Kolkata, Noida, Pune, Ahmedabad, Chennai, Hyderabad, Jaipur, Lucknow, Surat, Chandigarh, Kanpur, Agra, Indore, Nagpur, Ludhiana and Vadodara.</p>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">About Us</a></Col>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">Terms & Conditions</a></Col>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">Privacy Policy</a></Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">Blog</a></Col>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">Press Contact</a></Col>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">FAQs</a></Col>
                </Row>
                <Row><br/></Row>
                <Row>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">Contact</a></Col>
                    <Col sm={4}><a className="App-link" href="https://www.google.com">info@grofers.com</a></Col>
                </Row>
            </Container>
            <br/><br/><hr/>
            <Container>
                <Row>
                    <Col md={{span:1,offset:4}}><a href="https://www.instagram.com" className="FontAwesome"><i className="fa fa-facebook"></i></a></Col>
                    <Col md={{span:1}}><a href="https://www.instagram.com" className="FontAwesome"><i className="fa fa-instagram"></i></a></Col>
                    <Col md={{span:1}}><a href="https://www.instagram.com" className="FontAwesome"><i className="fa fa-twitter"></i></a></Col>
                    <Col md={{span:1}}><a href="https://www.instagram.com" className="FontAwesome"><i className="fa fa-linkedin"></i></a></Col>
                </Row>
                <br/><hr/>
                <p className="App">&copy; MB India Pvt. Ltd. 2016-2017</p>
            </Container>
            </div>
          );
    }
}