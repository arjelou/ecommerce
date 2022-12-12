import React from 'react';
import './Product.css';

export default class Product extends React.Component {
  render() {
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-9 piclist'>
            col images
          </div>
          <div className='col-lg-3 product-info'>
            <div className='mt-3'>
                <div className='d-flex justify-content-md-around'>
                    <h6>Product Title</h6>
                    <p><strong>$12.00</strong></p>
                </div>
                <div>
                    <select className='form-select text-center'>
                        <option selected>Choose size</option>
                        <option value='sm'>Small</option>
                        <option value='md'>Medium</option>
                        <option value='lg'>Large</option>
                    </select>
                    <hr />
                </div>
                <div className='d-flex justify-content-md-center mb-2'>
                    <label>Quantity</label>
                    <input type='number'/>
                </div>
                <div>
                    <hr />
                    <a href='.' className='btn btn-primary form-control' role='button'>Add to cart</a> 
                    <hr />
                </div>
                <div className='mb-3'>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
                    
            </div>
          </div>
        </div>
        <div className='row mt-5'>
        <hr />
        <h5 className='mb-4'>Related Products</h5>
        <div className='col'>
        <div className='d-flex gap-3 related-products'>
            <div>
            <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} />
            </div>
            <div>
            <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} />
            </div>
            <div>
            <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} />
            </div>
            <div>
            <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={200} />
            </div>
            
        </div>
        </div>
        </div>
       </div>
       </>
      )
  }
}
