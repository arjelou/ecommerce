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
            <div className="container"> 
                <div className="row">
                    <div className="col-md heading-info">
                            <h1 className="call-to-action">Up to 50% Off <br /> Adventures Accessories</h1>
                            <span className="text-white">On selected items only</span><br />
                            <button className="btn btn-success mt-4 button">DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row call-action d-flex justify-content-md-around text-center">
                <div className="col-lg-4 col-md-auto mt-2 mb-2">
                    <h4>{highquality}</h4>
                    <h6>High Quality</h6>
                    <span>It is made with good materials and craftsmanship, 
                        and is designed to be durable and reliable.</span>
                </div>
                <div className="col-lg-4 col-md-auto mt-2 mb-2">
                    <h4>{fastdelivery}</h4>
                    <h6>Fast Delivery</h6>
                    <span>To ensure that your parcel is delivered quickly, 
                        it is important to choose a reputable shipping company and to carefully address and package the item.</span>
                </div>
                <div className="col-lg-4 col-md-auto mt-2 mb-2">
                    <h4>{warranty}</h4>
                    <h6>Best Warranty</h6>
                    <span>A good warranty should cover all 
                        defects in materials and workmanship, and should provide for repairs or replacements at no cost to the consumer.</span>
                </div>
            </div>
        </div>
        <div className="container featured-products">
            <div className="row">
                <div className="col spring-sale-text">
                    <h2 className="text-center spring-sale-text mb-5">Featured Products</h2>
                </div>
            </div>
            <div className="row">
              <div className="d-flex justify-content-md-center gap-4 zoom">
              {this.state.persons.map(person => 
                        <div md="4" lg="4" className="outwear fimage">
                            <img alt="outwear" src={person.image} height={250} className="image-fluid"/>
                            <span className="d-flex"><strong>Price:</strong>{person.price}</span>
                        </div>
                    )}
              </div>
            </div>
        </div>
         {/* New Arrivals div */}
        <div className="container d-flex new-arrival">
                <div className="container-i">
                    <img alt="pantsuit_collection" src={require('./assets/pantsuit_collection.png')} width={450} className="img-fluid"/>
                        <div className="text-block">
                            <h3>The Pantsuit divlection</h3>
                        </div>
                </div>
                <div className="container-i">
                    <img alt="sharp_sweet_menswear" src={require('./assets/sharp_sweet_menswear.png')} width={450} className="img-fluid"/>
                        <div className="text-block">
                            <h3>Sharp Sweet Menswear</h3>
                        </div>
                </div>
                <div className="container-i">
                    <img alt="dventures_awai_accessories" src={require('./assets/adventures_awai_accessories.png')} width={450} className="img-fluid"/>
                        <div className="text-block">
                            <h3>Adventures Accessories</h3>
                        </div>
                </div>
        </div>
        {/* Bestsellers by Category */}
        <div className="container best-sellers">
            <div>
                <div className="spring-sale">
                    <h2 className="text-center spring-sale-text mb-5">Bestsellers by Category</h2>
                </div>
            </div>
            <div className="d-flex justify-content-md-center">
                <div className="dresses">
                    <img alt="dresses" src={require('./assets/dresses.png')} width={350} className="mb-2 img-fluid"/>
                    <h3 className="text-center">Dresses</h3>
                </div>
                <div className="knitwear">
                <img alt="knitwear" src={require('./assets/knitwear.png')} width={350} className="mb-2 img-fluid"/>
                    <h3 className="text-center">Knitwear</h3>
                </div>
                <div className="crop_tops">
                <img alt="crop_tops" src={require('./assets/crop_tops.png')} width={350} className="mb-2 img-fluid"/>
                    <h3 className="text-center">Crop Tops</h3>
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

