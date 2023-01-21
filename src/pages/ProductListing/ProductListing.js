import React from 'react';
import axios from 'axios';
import './ProductListing.css';
import pic from '../../pages/Home/assets/dresses.png'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default class ProductListing extends React.Component{
    state = {
        persons: [
          
        ]
      }
    
      componentDidMount() {
        axios.get(`http://localhost:4000/`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(this.state.persons);
          })
      }
    
render() {
    return (
    <>
    <Navbar />
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='CardCainter text-center'>
                        <h2 className=''>Your Collection</h2>
                    </div>
                </div>
            </div>
            {/* Pick Your Style */}
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='mt-5'>Pick Your Style</h2>
                    <div className='CardCainter text-center'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-4 d-flex gap-2'>
                                    <button className='btn btn-primary'>Clothing</button>
                                    <button className='btn btn-primary'>Home Furnishing</button>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-md-center gap-5'>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-1 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={180} className='catalogue'/>
                                             <p className='card-image-title mt-2'>Dress</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>  
        {/* Best Sellers */}
        <div className='row'>
                <div className='col-md-12 col-lg-12'>
                    <h2 className='mt-5'>Best Sellers</h2>
                    <div className='CardCainter text-center'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-4 d-flex gap-2'>
                                    <button className='btn btn-primary'>Clothing</button>
                                    <button className='btn btn-primary'>Home Furnishing</button>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-md-start gap-5'>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className='cardContainer'>
                                        <a href='.' className='catalogueLink'>
                                            <img src={pic} alt='hello' width={200} className='catalogue1'/>
                                             <p className='card-image-title'>Dress Title</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div> 
        </div>

                <hr />
                <Footer />
            </>
          )
        }
    }
   
