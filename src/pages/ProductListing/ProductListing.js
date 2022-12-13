import React from 'react';
import './ProductListing.css';

export default class ProductListing extends React.Component{
    render() {
        return (
        
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 mt-5'>
                        <h4>Categories</h4>
                        <p>category 1</p>
                        <p>category 2</p>
                        <p>category 3</p>
                        <p>category 4</p>
                        <p>category 5</p>
                        <p>category 6</p>
                        <p>category 7</p>
                        <hr />
                        <strong>Price</strong>
                            <div className='d-flex'>
                                <input type='range' className='form-range' min={0} max={10}/>
                            </div>
                    </div>
                    <div className='col-lg-10 mt-5'>
                        <div className='filterbyprice d-flex justify-content-md-between'>
                            <div>
                            <label for='FilterByPrice'><strong>Refind By | Price  </strong></label>
                            <select id='FilterByPrice' className='m-1'>
                            <option value='lowtohigh'></option>
                                <option value='lowtohigh'>Low to High</option>
                                <option value='hightolow'>High to Low</option>
                            </select>
                            </div>
                            <div>
                            <label for='FilterByPrice'><strong>Sort By |   </strong></label>
                            <select id='FilterByPrice' className='m-1'>
                            <option value='lowtohigh'></option>
                                <option value='lowtohigh'>Best Seller</option>
                                <option value='hightolow'>Relivant</option>
                            </select>
                            </div>
                        </div>
                        <hr />
                        <div className='row d-flex gap-4'>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-image">
                                    <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} className="image-hover"/>
                                <div className='overlay'>
                                <h6 className='mt-3'>Price: 00.00</h6>
                                    <div className='m-2'>
                                    <hr />
                                    <a className='btn btn-outline-primary form-control' href="." role='button'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          )
        }
    }
   
