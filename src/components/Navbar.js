import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart2,BsPerson } from 'react-icons/bs';
import './style.css';

export default class Navbar extends React.Component {
  render() {
    return (
    <>
        <div className="container sticky-div">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6 col-xm-12">
                    <div className="d-flex justify-content-md-between">
                        <h5>GRE'</h5>
                        <input
                            type="text"
                            className="p-2"
                            placeholder="search"
                        />
                        <div className="d-flex gap-1">
                            <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/cart'><BsCart2 size={35} title='Cart' /></NavLink>
                            <NavLink className={({isActive}) => isActive ? "active-link" : "unactive-link"} to='/login'><BsPerson size={35} title='Login' /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* target for toggl */}
            <div className="row">
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
                        {/* <li className="nav-item">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="."
                        >
                            Cat1
                        </a>
                        </li> */}
                        <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/productlisting'>PROMO</NavLink>
                        <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/cart'>CATEGORY</NavLink>
                        <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/product'>CATEGORY</NavLink>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
          </div>
        </div>
        
    </>
      
      )
    }
  }
  
