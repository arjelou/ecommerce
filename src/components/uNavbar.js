import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle ,BsPerson, BsGear, BsBoxArrowLeft} from 'react-icons/bs';
import './style.css';

export default class uNavbar extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
 }

logoutUserProfile = () =>{
  const logoutUser = window.confirm('Are you sure you want to log out?')
  if(logoutUser) {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/'
  }else {}
}

 render() {
     return (
  <>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-div container-fluid">
        <div className="container">
          <a className="navbar-brand" href="/designs">ACMADE MAGSIGE</a>
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
              <li className="nav-item unactive-category-btn">
                <button class="nav-link canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">Inquiries</button>
              </li>
            </ul>
          </div>
          <li className="nav-item dropdown unactive-category-btn">
              <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <BsPersonCircle size={30} />
               {document.cookie.split(';')[1].split('=')[1]}
              </a>
              <ul className="dropdown-menu">
                <NavLink className='unactive_category_dropdown'><BsPerson size={20} />  Profile</NavLink>
                <NavLink className='unactive_category_dropdown'><BsGear size={20} />  Settings</NavLink>
                <NavLink className='unactive_category_dropdown' onClick={this.logoutUserProfile}><BsBoxArrowLeft size={20} />  Log out</NavLink>
              </ul>
          </li>
        </div>
      </nav>
    </div>
  </> 
)}
}