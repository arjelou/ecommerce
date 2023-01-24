import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPerson, BsBell } from 'react-icons/bs';
import './style.css';

export default class mainNavbar extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
 }

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
            {/* <li className="nav-item unactive-category-btn">
                <a className="nav-link active" aria-current="page" href=".">Dashboard</a>
              </li> */}
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
                  Design
                </a>
                <ul className="dropdown-menu">
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dada'>All Design</NavLink>
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/asasa'>Uniforms</NavLink>
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/asas'>Gre Brand</NavLink>


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
              {/* <li className="list-group-item d-flex align-items-start unactive-category-btn">
                <a className="nav-link me-auto" aria-current="page" href=".">Notification</a>
                <span className="badge bg-primary rounded-pill">2</span>
              </li> */}
            </ul>
          </div>
          <div>
            <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/login'><BsPerson size={30} title='Login' /></NavLink>
            <NavLink className={({isActive}) => isActive ? "active-category-btn" : "unactive-category-btn"} to='/login'><BsBell size={25} title='Login' /></NavLink>
          </div>
        </div>
        
      </nav>
    </div> 
    
  </> 
)}
}