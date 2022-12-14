import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

export default class Product extends React.Component {
  constructor(){
    super();
    this.state = {qty: 0}
  }

  AddButton = () =>{
      this.qty = 1
    }

    
  
  render() {
    const addButton = <FontAwesomeIcon icon={faPlusCircle} size='xl' title='add'/>
    const minusButton = <FontAwesomeIcon icon={faMinusCircle} size='xl' title='add'/>
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-9 piclist product'>
            col images
          </div>
          <div className='col-lg-3 product-info product'>
            <div className='mt-3'>
                <div className='d-flex justify-content-md-around'>
                    <h4>Product Title</h4>
                    <h4><strong>$12.00</strong></h4>
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
                <div className='d-flex justify-content-md-between mb-2'>
                    <h5>Quantity</h5>
                    <button className='btn btn-primary'>{minusButton}</button>
                    <h4>{this.state.qty}</h4>
                    <button type='button' onClick={this.AddButton()} className='btn btn-primary'>{addButton}</button>
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
