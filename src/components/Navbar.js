import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default class Navbar extends React.Component {
  render() {
    const userprofile = <FontAwesomeIcon icon={faUser} />
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    const wishlist = <FontAwesomeIcon icon={faHeart} />
    return (
        
            <div className='navbar-container container-fluid'>
            <nav className='navbar navbar-expand-md'>
                <div className='container-fluid'>
                    <a className='navbar-brand text-white' href='.'>ACMADE</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-md-end' id='navbarSupportedContent'>
                        <form className='d-flex' role='search'>
                            <input type='text' className='form-control me-1' placeholder='40% off'/>
                        </form>
                        <button className='btn btn-outline-info m-1'> {cart}</button>
                        <button className='btn btn-outline-info m-1'> {wishlist}</button>
                        <button className='btn btn-outline-info m-1'> {userprofile}</button>
                    </div>
                </div>
            </nav>
            </div>
      
      )
    }
  }
  
