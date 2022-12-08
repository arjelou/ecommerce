import React from 'react';

export default class ProductListing extends React.Component{
    render() {
        return (
            <>
            <div className='container'>
                <div className='row'>

                    <hr />
                    <div className='col-lg-3'>
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
                    <div className='col-lg-9'>
                        <h2>Col 2 for product listing</h2>
                        <hr />
                    </div>
                </div>
            </div>
            </>
          )
        }
    }
   
