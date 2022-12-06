import React from "react";
import './Home.css';
import Navibar from "../../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="hero-img">
        <Navibar />
            <Row>
                <Col className="mintmade-online text-white">
                <h1>ACMADE ONLINE</h1> 
                <hr className="hr-hero"/>
                <h1 className="sale">Supreme Spring Sale <br /> Up to 50% off</h1> 
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>
        <Container className="spring-sale-container">
            <Row>
                <Col className="spring-sale">
                    <h2 className="text-center spring-sale-text">Spring Sale Per Category</h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="4" lg="4" className="outwear">
                    <img alt="outwear" src={require('./assets/outerwear.png')} width={450} className="mb-2 filter-imager"/>
                    <h2 className="text-center">Outerwear</h2>
                </Col>
                <Col md="4" lg="4" className="hoodies">
                <img alt="hoodies" src={require('./assets/hoodies.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Hoodies</h2>
                </Col>
                <Col md="4" lg="4" className="footwear">
                <img alt="footwear" src={require('./assets/footwear.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Footwear</h2>
                </Col>
            </Row>
            {/* New Arrivals CONTAINER */}
        </Container>
        <Container className="spring-sale-container">
            <Row>
                <Col className="spring-sale">
                    <h2 className="text-center spring-sale-text">New Arrivals</h2>
                </Col>
            </Row>
            <Row>
                <Col md="4" lg="4" className="outwear">
                    <img alt="timer" src={require('./assets/pantsuit_collection.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">The Pantsuit Collection</h2>
                </Col>
                <Col md="4" lg="4" className="hoodies">
                <img alt="timer" src={require('./assets/sharp_sweet_menswear.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Sharp Sweet Menswear</h2>
                </Col>
                <Col md="4" lg="4" className="footwear">
                <img alt="timer" src={require('./assets/adventures_awai_accessories.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Adventures Await Accessories</h2>
                </Col>
            </Row>
        </Container>
        {/* Bestsellers by Category */}
        <Container className="bestsellers-category-container">
            <Row>
                <Col className="spring-sale">
                    <h2 className="text-center spring-sale-text">Bestsellers by Category</h2>
                </Col>
            </Row>
            <Row>
                <Col md="4" lg="4" className="dresses">
                    <img alt="dresses" src={require('./assets/dresses.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Dresses</h2>
                </Col>
                <Col md="4" lg="4" className="knitwear">
                <img alt="knitwear" src={require('./assets/knitwear.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Knitwear</h2>
                </Col>
                <Col md="4" lg="4" className="crop_tops">
                <img alt="crop_tops" src={require('./assets/crop_tops.png')} width={450} className="mb-2"/>
                    <h2 className="text-center">Crop Tops</h2>
                </Col>
            </Row>
        </Container>

        <Container fluid className="physical-stores-container">
            <Row>
                <Col md="3" lg="5" className="physical-stores">
                    <h1 className="text-white">Visit our<br /> physical stores</h1>
                </Col> 
            </Row>
           <Row>
                <Col>
                    <p className="location">163 Woodlands Place</p>
                    <p className="location">Algies Bay, Rodney 0920</p>
                </Col>
                <Col>
                    <p className="location">1234 Black Street,</p>
                    <p className="location">Chatswood NSW, Australia 1234</p>
                </Col>
            </Row> 
        </Container>
        {/* Need Anything Container */}
        <Container fluid className="need-anything">
            <Row>
                <Col className="need-anything-text">
                    <h1 className="text-white  text-center">Need Anything ?</h1>
                </Col> 
            </Row>
           <Row>
                <Col>
                    
                </Col>
                <Col>
                    
                </Col>
            </Row> 
        </Container>
        
      </>
    );
  }
}

export default Home;