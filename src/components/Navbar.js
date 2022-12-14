import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class Navbar extends React.Component {
  render() {
    const userprofile = <FontAwesomeIcon icon={faUser} size='xl' title='Login'/>
    const cart = <FontAwesomeIcon icon={faShoppingCart} size='xl' title='Cart item'/>
    const wishlist = <FontAwesomeIcon icon={faHeart} size='xl' title='Wishlist item'/>
    return (
        
            <div className='navbar-container container-fluid'>
            <nav className='navbar navbar-expand-md'>
                <div className='container-fluid'>
                    <a className='navbar-brand text-white' href='.'>ACMADE</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-md-end gap-3' id='navbarSupportedContent'>
                        <form className='d-flex' role='search'>
                            <input type='text' className='form-control me-1' placeholder='40% off'/>
                        </form>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/cart'>{cart}</NavLink>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/'>{wishlist}</NavLink>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/login'>{userprofile}</NavLink>
                    </div>
                </div>
            </nav>
            </div>
      
      )
    }
  }
  
