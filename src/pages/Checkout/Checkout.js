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
                <h6 className='mt-3'>Customer Information</h6>
                  
                  <label for="email">Email Address</label>
                  <input type="email" class="checkout-form" id="email" name="email" placeholder='john@example.com'/>
                  <label for="number">Phone Number</label>
                  <input type="number" class="checkout-form" id="number" name="number" placeholder='0955-XXX-XXXX' min={11}/>
                  
                  <h6 className='mt-3'>Shipping Information</h6>
                  <label for="fname">First Name</label>
                  <input type="text" class="checkout-form" id="fname" name="fname"/>
                  <label for="lname">Last Name</label>
                  <input type="text" class="checkout-form" id="lname" name="lname"/>
                  <label for="fname">Address</label>
                  <input type="text" class="checkout-form" id="fname" name="fname" placeholder='street # district city state'/>

                </form>
              </div>            
              <div className="row mb-3 mt-3">
                <h5>Payment Method</h5>
                <div className="col-md ">
                  <button className="btnPayment" >GCash</button>
                  <button className="btnPayment"> PayPal</button>
                  <button className="btnPayment" data-bs-toggle="modal" data-bs-target="#exampleModal">Visa</button>
                  <button className="btnPayment">Coinsph</button>
                </div>
                {/* modal */}
                  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Visa</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <label>Card Number</label>
                            <input type="number" className="form-control" placeholder="card number"/>
                            <label className='mt-2'>Expired date</label>
                            <input type="date" className="form-control" placeholder="card number"/>
                            <label className='mt-2'>CVV</label>
                            <input type="text" className="form-control" placeholder="card number"/>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btncompleteOrdder">COMPLETE ORDER</button>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* end modal */}
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
