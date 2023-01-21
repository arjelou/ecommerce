import React from 'react';
import { NavLink } from 'react-router-dom';
// import { BsCart,BsPerson } from 'react-icons/bs';
import acmadelog from '../../src/assets/acmade.png'
import './style.css';

export default class Navbar extends React.Component {
  render() {
    return (
    <>    
        <div className="container-fluid sticky-div">
        {/* <div className='row'>
            <div className='col d-flex'>
                <p className='priceat199'><BsGift size={20} className='priceat199Icon'/> Pick Any Product at P199</p>
                <hp className='shopnow'>SHOP NOW</hp>
            </div>
        </div> */}
            {/* <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6 col-xm-12">
                    <div className="d-flex justify-content-md-between mt-3">
                       <NavLink to='/'><img src={acmadelog} alt='acmadeLogo' width={110} className='logoHeader'/></NavLink>
                        <input
                            type="text"
                            className="p-2 search"
                            placeholder="search"
                        />
                        <div className="d-flex gap-1">
                            <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/cart'><BsCart size={35} title='Cart' /></NavLink>
                            <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/login'><BsPerson size={35} title='Login' /></NavLink>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* target for toggl */}
            <div className="row">
            <div className="col">
            <NavLink to='/'><img src={acmadelog} alt='acmadeLogo' width={110} className='logoHeader'/></NavLink>
            </div>
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <span>Categories</span>
                            </button>
                            <div
                            className="offcanvas offcanvas-end"
                            tabindex="-1"
                            id="offcanvasDarkNavbar"
                            >
                            <ul className="navbar-nav me-auto  mb-lg-0 justify-content-end gap-1">
                                <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/productlisting'>Designs</NavLink>
                                <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/login'>Login</NavLink>
                                {/* <NavLink className='unactive-category-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Login</NavLink> */}
                                <NavLink className="getStarted" to='/login'>Get Started</NavLink>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
          </div>
        </div>
          {/* modal */}
          {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Visa</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body">
                        <NavLink type="button" className="btnSelectLogin" to='/login'>BRAND</NavLink>
                        <button type="button" className="btnSelectLogin mt-3">SUPPLIER</button>

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
                  </div> */}
                {/* end modal */}
    </>
      )
    }
  }
  
