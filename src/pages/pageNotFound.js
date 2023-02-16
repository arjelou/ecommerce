import React from 'react';
import { NavLink } from 'react-router-dom';
import PageNotFound from '../assets/404.jpg';

export default class pageNotFound extends React.Component{
 
render() {
    return (
<>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-div container-fluid">
        <div className="container">
          <a className="navbar-brand" href=".">ACMADE MAGSIGE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <ul className="navbar-nav justify-content-start">
              <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/listofcustomers'>About Us</NavLink>
                  <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateCustomer">Contact Us</NavLink>
                  <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateCustomer">Join Our Team</NavLink>
                </ul>
              </li>
              <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other Services
                </a>
                <ul className="dropdown-menu">
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/alldesigns'>Labor</NavLink>
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/categories'>Agriculture</NavLink>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className='text-center'>
        <img src={PageNotFound} alt="Page Not Found!"/>
    </div>
</>
    )
}     
}
