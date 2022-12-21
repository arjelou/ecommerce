import React from 'react';
import './Checkout.css';
import Footer from '../../components/Footer';

export default class Checkout extends React.Component {
  render() {
    const Subtotal = 120.00;
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-8 piclist checkout'>
          <div className="container">
              <div className="row">
                <form>
                <h6 className='mt-3 d-flex'>Customer Information</h6>
                  <label for="email">Email Address</label>
                  <input type="email" class="checkout-form" id="email" name="email" placeholder='john@example.com'/>
                  <h6 className='mt-3'>Shipping Information</h6>
                  <label for="fname">First Name</label>
                  <input type="text" class="checkout-form" id="fname" name="fname"/>
                  <label for="lname">Last Name</label>
                  <input type="text" class="checkout-form" id="lname" name="lname"/>
                  <label for="fname">Address</label>
                  <input type="text" class="checkout-form" id="fname" name="fname" placeholder='street # district city state'/>

                </form>
              </div>
              <div className="row">
                <div className="col-md">
                  
                </div>
              </div>
              <hr />
              <div className="row mb-3">
                <h5>Payment Method</h5>
                <div className="col-md ">
                  <button className="btnPayment">GCash</button>
                  <button className="btnPayment"> PayPal</button>
                  <button className="btnPayment">Visa</button>
                  <button className="btnPayment">Coinsph</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mt-3'>
                <div className=''>
                    <form className=''> 
                      <h6>Apply Promo Code</h6>
                        <input type='text' placeholder='enter promo code!' className='promoCode'/>
                        <button className='btnpromoCode'>Apply</button>
                        <h5>Order Summary</h5>
                        <h6>Actual Amount: ${Subtotal}</h6>
                        <h6>Shipping Charges:</h6>
                        <h6>Tax:</h6>
                        <h5 className='mb-4 mt-4'><strong>Amount to Pay: ${Subtotal}</strong></h5>
                        <button className='btncompleteOrdder'>COMPLETE ORDER</button>
                    </form>
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
       <hr />
        <Footer />
       </>
      )
  }
}
