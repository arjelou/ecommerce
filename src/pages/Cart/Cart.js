import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css';
import { BsCartX } from 'react-icons/bs';
import Footer from '../../components/Footer';

export default class Cart extends React.Component {
  render() {
    const Subtotal = 120.00;
    return (
       <>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-8 piclist cart'>
            <div className='row'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='d-flex'><img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={50} />
                            <h6 className='m-1'>Gala Bed Chiropractic Spring Mattress</h6>
                            </th>
                            <th>${Subtotal}</th>
                            <th><input type='number' className='qty' /></th>
                            <th><a href='.' className='btn-cartRemove'><BsCartX  size={25}/></a></th>
                        </tr>
                        <tr>
                            <th className='d-flex'><img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={50} />
                            <h6 className='m-1'>Gala Bed Chiropractic Spring Mattress</h6>
                            </th>
                            <th>${Subtotal}</th>
                            <th><input type='number' className='qty' /></th>
                            <th><a href='.' className='btn-cartRemove'><BsCartX  size={25}/></a></th>
                        </tr>
                        <tr>
                            <th className='d-flex'><img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={50} />
                            <h6 className='m-1'>Gala Bed Chiropractic Spring Mattress</h6>
                            </th>
                            <th>${Subtotal}</th>
                            <th><input type='number' className='qty' /></th>
                            <th><a href='.' className='btn-cartRemove'><BsCartX  size={25}/></a></th>
                        </tr>
                        <tr>
                            <th className='d-flex'><img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={50} />
                            <h6 className='m-1'>Gala Bed Chiropractic Spring Mattress</h6>
                            </th>
                            <th>${Subtotal}</th>
                            <th><input type='number' className='qty' /></th>
                            <th><a href='.' className='btn-cartRemove'><BsCartX  size={25}/></a></th>
                        </tr>
                        <tr>
                            <th className='d-flex'><img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={50} />
                            <h6 className='m-1'>Gala Bed Chiropractic Spring Mattress</h6>
                            </th>
                            <th>${Subtotal}</th>
                            <th><input type='number' className='qty' /></th>
                            <th><a href='.' className='btn-cartRemove'><BsCartX  size={25}/></a></th>
                        </tr>
                        <tr>
                            <th className='d-flex'><img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg' alt='profile' width={50} />
                            <h6 className='m-1'>Gala Bed Chiropractic Spring Mattress</h6>
                            </th>
                            <th>${Subtotal}</th>
                            <th><input type='number' className='qty' /></th>
                            <th><a href='.' className='btn-cartRemove'><BsCartX  size={25}/></a></th>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='checkOutDiv'>
                <div className='d-flex justify-content-md-between'>
                    <h6>Cart Summary (0)</h6>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <h4><strong>Grand Total:</strong></h4>
                    <h4><strong> ${Subtotal}</strong></h4>
                </div>
                <NavLink to='/checkout' className='btn-proceedToCheckout'>PROCEED TO CHECKOUT</NavLink>
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
