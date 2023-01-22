import React from 'react';
import AddNewModal from './addNewModal';

export default class navbaer extends React.Component  {
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
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=".">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href=".">Customer</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sales
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href=".">List of Invoice</a></li>
                  <li><a className="dropdown-item" href=".">Create Estimates</a></li>
                  <li><a className="dropdown-item" href=".">Create Invoice</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Producs
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href=".">All Design</a></li>
                  <li><a className="dropdown-item" href="." data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</a></li>
                  <li><a className="dropdown-item" href=".">Categories</a></li>
                </ul>
              </li>
              <li className="list-group-item d-flex align-items-start">
                <a className="nav-link me-auto" aria-current="page" href=".">Notification</a>
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AddNewModal />
    </>  
      
)}
}