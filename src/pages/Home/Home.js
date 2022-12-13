import React from "react";
import './Home.css';
import '../../components/Footer';
import axios from 'axios';
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp,faTruckFast,faUserShield } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://fakestoreapi.com/products?limit=5`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

  render() {
    const fastdelivery = <FontAwesomeIcon icon={faTruckFast} size='lg'/>
    const highquality = <FontAwesomeIcon icon={faThumbsUp} size='lg'/>
    const warranty = <FontAwesomeIcon icon={faUserShield} size='lg'/>
    return (
      <>
        <div className="container-fluid hero-img">
            <div className="d-flex "> 
            </div>
        </div>
        <div className="call-action d-flex justify-content-md-around text-center">
            <div className="mt-5">
                <h4>{highquality}</h4>
                <h6>High Quality</h6>
            </div>
            <div className="mt-5">
                <h4>{fastdelivery}</h4>
                <h6>Fast Delivery</h6>
            </div>
            <div className="mt-5">
                <h4>{warranty}</h4>
                <h6>Best Warranty</h6>
            </div>
        </div>
        <div className="container spring-sale-category">
            <div>
                <div className="spring-sale-text mt-5">
                    <h2 className="text-center spring-sale-text mb-5">Spring Sale</h2>
                </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-md-center gap-4 zoom">
              {this.state.persons.map(person => 
                        <div md="3" lg="4" className="outwear fimage">
                            <img alt="outwear" src={person.image} height={250} className="mb-2"/>
                            <span className="d-block">{person.price}</span>
                        </div>
                    )}

                {/* <div md="3" lg="4" className="outwear">
                    <img alt="outwear" src={require('./assets/outerwear.png')} width={250} className="mb-2 img-fluid"/>
                    <h2 className="text-center bottom-center">Outerwear</h2>
                </div> */}
              </div>
            </div>
            {/* New Arrivals div */}
        </div>
        <div className="container new-arrival">
            <div>
                <div className="spring-sale">
                    <h2 className="text-center new-arrival-text">New Arrivals</h2>
                </div>
            </div>
            <div className="d-flex justify-content-md-center">
                <div md="4" lg="4" className="outwear">
                    <img alt="timer" src={require('./assets/pantsuit_collection.png')} width={450} className="mb-2 img-fluid"/>
                    <h2 className="text-center">The Pantsuit divlection</h2>
                </div>
                <div md="4" lg="4" className="hoodies">
                <img alt="timer" src={require('./assets/sharp_sweet_menswear.png')} width={450} className="mb-2 img-fluid"/>
                    <h2 className="text-center">Sharp Sweet Menswear</h2>
                </div>
                <div md="4" lg="4" className="footwear">
                <img alt="timer" src={require('./assets/adventures_awai_accessories.png')} width={450} className="mb-2 img-fluid"/>
                    <h2 className="text-center">Adventures Await Accessories</h2>
                </div>
            </div>
        </div>
        {/* Bestsellers by Category */}
        <div className="container best-sellers">
            <div>
                <div className="spring-sale">
                    <h2 className="text-center spring-sale-text">Bestsellers by Category</h2>
                </div>
            </div>
            <div className="d-flex justify-content-md-center">
                <div className="dresses">
                    <img alt="dresses" src={require('./assets/dresses.png')} width={350} className="mb-2 img-fluid"/>
                    <h2 className="text-center">Dresses</h2>
                </div>
                <div className="knitwear">
                <img alt="knitwear" src={require('./assets/knitwear.png')} width={350} className="mb-2 img-fluid"/>
                    <h2 className="text-center">Knitwear</h2>
                </div>
                <div className="crop_tops">
                <img alt="crop_tops" src={require('./assets/crop_tops.png')} width={350} className="mb-2 img-fluid"/>
                    <h2 className="text-center">Crop Tops</h2>
                </div>
            </div>
        </div>

        <div className="container-fluid physical-stores">
                    <h1 className="d-flex text-white mt-5">Visit our<br /> physical stores</h1>
           <div className="d-flex justify-content-around">
                <div className="d-inline-block">
                    <p className="location">163 Woodlands Place</p>
                    <p className="location">Algies Bay, Rodney 0920</p>
                </div>
                <div className="d-inline-block">
                    <p className="location">1234 Black Street,</p>
                    <p className="location">Chatswood NSW, Australia 1234</p>
                </div>
            </div> 
        </div>
        {/* Footer */}
        <div className="d-flex footer justify-content-md-center">
            <Footer />
        </div>
        
      </>
    );
  }
}

