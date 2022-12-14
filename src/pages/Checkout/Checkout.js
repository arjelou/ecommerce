import React from 'react';
import './Checkout.css';

export default class Checkout extends React.Component {
  render() {
    const Subtotal = 120.00;
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-9 piclist checkout'>
          <form className='g-3'>
            <h6>Customer Information</h6>
              <div class="col-auto form-floating mb-3">
                 <input type="email" class="form-control" id="floatingInput" placeholder='adakd'/>
                   <label for="floatingInput">Email address</label>
              </div>
                <hr />
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">First Name</label>
                  </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Last Name</label>
                  </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Company (optional)</label>
                  </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Address</label>
                    </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Appartment (optional)</label>
                  </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Country</label>
                  </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">State</label>
                  </div>
                  <div class="col-auto form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Zip Code</label>
                  </div>
              </form>
          </div>
          <div className='col-lg-3 product-info checkout'>
            <div className='mt-3'>
                <div className='d-flex justify-content-md-around'>
                    <h4>Summary | items count here</h4>
                </div>
                <div className='justify-content-md-around'>
                    <h6>Subtotal:${Subtotal}</h6>
                    <h6>Shipping:</h6>
                    <h6>Tax:</h6>
                    <hr />
                </div>
                <div className='d-flex justify-content-md-around mb-2'>
                    <h5><strong>Total:</strong></h5>
                    <h5><strong>${Subtotal}</strong></h5>
                </div>
                <div>
                    <hr />
                    <label>Gift card or discound code</label>
                    <form className='d-flex gap-1'>
                      <input type='text' className='form-control' />
                      <button className='btn btn-primary'>Apply</button>
                    </form>
                    <hr />
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
