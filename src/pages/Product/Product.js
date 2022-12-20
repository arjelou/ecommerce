import React from 'react';
import './Product.css';
import { BsCart2 } from 'react-icons/bs';
import pic from '../../pages/Home/assets/dresses.png';

export default class Product extends React.Component {
  
  render() {
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-8 d-flex gap-3'>
            <img src={pic} alt='produc-img' height={500}/>
            <img src={pic} alt='produc-img' height={200}/>
            
          </div>
          <div className='col-lg-4  product'>
            <div className='mt-3'>
                <div className=''>
                    <h4>Gala Bed Chiropractic Spring Mattress</h4>
                    <h4><strong>P112.00</strong></h4>
                </div>
                <div className='d-block'>
                    <select className='p-1'>
                        <option selected>Choose size</option>
                        <option value='sm'>SMALL</option>
                        <option value='md'>MEDIUM</option>
                        <option value='lg'>LARGE</option>
                        <option value='lg'>XLARGE</option>
                        <option value='lg'>XXLARGE</option>
                    </select><br />
                    <input type='number' className='p-1 mt-2' placeholder='Ente Quantity'/>
                    <a href='.' className='btn-addToCart' role='button'><strong><BsCart2 size={30}/> ADD TO CART</strong></a> 
                </div>
                <div className='mb-3 mt-3'>
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
