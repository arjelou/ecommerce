import React from 'react';
import { NavLink } from 'react-router-dom';
import AddNewModal from './addNewModal';
import AddNewModalCreateInvoice from './addNewModalCreateInvoice';
import AddNewModalCreateCustomer from './addNewModalCreateCustomer';
import { BsPersonCircle ,BsPerson, BsGear, BsBoxArrowLeft} from 'react-icons/bs';
import '../../../global.css';

export default class navbar extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
 }
 componentDidMount() {
  fetch('http://localhost:4002/allnotification')
  .then((res) => res.json())
  .then((response) => {
    const notiList = response.length
    this.setState({data: notiList})
  })
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
                  <NavLink className="unactive_category_dropdown" data-bs-toggle="modal" data-bs-target="#addNewModal">Add New</NavLink>
                </ul>
              </li>
              <li className="list-group-item d-flex align-items-start unactive-category-btn">
                <NavLink className='nav-link' to='/dashboard/notification'>Notification</NavLink>
                <span className="badge bg-primary rounded-pill">{this.state.data}</span>
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
      <AddNewModal />
      <AddNewModalCreateInvoice />
      <AddNewModalCreateCustomer />
    </> 
)}
}