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
            <div className='row'>
                <div className='col-lg-5'>
                    <div class="container">
                    <h2>Dynamic Tabs</h2>
                      <div className='container'>
                      <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">.home.
                            This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation..</div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">.profule..</div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">..contact.</div>
                          </div>

                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                                </li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
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
