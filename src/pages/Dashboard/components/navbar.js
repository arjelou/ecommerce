import React from 'react';
import { NavLink } from 'react-router-dom';
import AddNewModal from './addNewModal';
import AddNewModalCreateInvoice from './addNewModalCreateInvoice';
import AddNewModalCreateCustomer from './addNewModalCreateCustomer';

import '../../../global.css';

export default class navbar extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
 
 }

 render() {
     return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href=".">ACMADE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <ul className="navbar-nav justify-content-start">
            <li className="nav-item unactive-category-btn">
                <a className="nav-link active" aria-current="page" href=".">Dashboard</a>
              </li>
              <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Customer
                </a>
                <ul className="dropdown-menu">
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/listofcustomers'>List of Customer</NavLink>
                  <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateCustomer">Create Customer</NavLink>
                </ul>
              </li>
              <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sales
                </a>
                <ul className="dropdown-menu">
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/listofinvoice'>List of Invoice</NavLink>
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/listofestimates'>List of Estimates</NavLink>
                  <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateInvoice">Create Invoice</NavLink>
                  <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModalCreateEstimates">Create Estimates</NavLink>

                </ul>
              </li>
              <li className="nav-item dropdown unactive-category-btn">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Producs
                </a>
                <ul className="dropdown-menu">
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/alldesigns'>All Design</NavLink>
                  <NavLink className={({isActive}) => isActive ? "active_category_dropdown" : "unactive_category_dropdown"} to='/dashboard/categories'>Categories</NavLink>
                </ul>
              </li>
              <li className="list-group-item d-flex align-items-start unactive-category-btn">
                <a className="nav-link me-auto" aria-current="page" href=".">Notification</a>
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <AddNewModal />
      <AddNewModalCreateInvoice />
      <AddNewModalCreateCustomer />
    </>  
      
)}
}