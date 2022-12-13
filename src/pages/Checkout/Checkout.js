import React from 'react';
import './Checkout.css';

export default class Checkout extends React.Component {
  render() {
    const Subtotal = 120.00;
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-9 piclist'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div class="container">
                    <h2>Dynamic Tabs</h2>
  

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>Information</h3>
      <hr />
      <label for='name'>Name:</label>
      <input type='text' placeholder='your name' />
      <label for='name'>BDate:</label>
      <input type='text' placeholder='your name' /><br />
      <a class='btn btn-primary' role='button' data-toggle="tab" href="#menu1">Next</a>
      
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Shipping</h3>
      <hr />
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a class='btn btn-primary' role='button' data-toggle="tab" href="#menu2">Next</a>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Payment</h3>
      <hr />
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      <a class='btn btn-primary' role='button' data-toggle="tab" href="#home">Complete Order</a>
    </div>
    
  </div>

                    </div>
                </div>
            </div>
          </div>
          <div className='col-lg-3 product-info'>
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
                    <a href='.' className='btn btn-primary form-control' role='button'>Checkout</a> 
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
