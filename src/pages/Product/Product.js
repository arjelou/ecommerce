import React from 'react';
import './Product.css';
import pic from '../../pages/Home/assets/dresses.png';
export default class Product extends React.Component {
  
  render() {
    return (
       <>
       <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-8 d-flex gap-3'>
            <img src={pic} alt='produc-img' height={500}/>
            <img src={pic} alt='produc-img' height={200}/>
            
          </div>
          <div className='col-lg-4  product'>
            <div className='mt-3'>
                    <form>
                      <h4>Gala Bed Chiropractic Spring Mattress</h4>
                      <button className='btn-addToCart'>GET YOUR FREE SAMPLE</button> 
                      <br />
                      <span className=''>You can sent message here!</span>
                      <input type='email' className='enter-qty' placeholder='yourcompany@example.com'/>
                      <textarea type='text' className='enter-qty' placeholder='Message' />
                      <button type='submit' className='btn-addToCart'>Send Inquiry</button>
                    </form>
                <div className='mb-3 mt-3'>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
                    
            </div>
          </div>
        </div>
       </div>
       </>
      )
  }
}
