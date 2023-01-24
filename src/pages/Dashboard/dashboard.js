import React from 'react';
import Navbar from './components/navbar';
import AddNewModal from './components/addNewModal';
import '../../global.css';
import AddNewModalCategory from './components/addNewModalCategory';
import AddNewModalCreateInvoice from './components/addNewModalCreateInvoice';
import AddNewModalCreateEstimate from './components/addNewModalCreateEstimate';
import AddNewModalCreateCustomer from './components/addNewModalCreateCustomer'; 

import { Outlet } from 'react-router-dom';

export default class dashboard extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      product_list: [],
    }
 
 }

 render() {
     return (
<>
   
<div className="container">
  <div className='row'>
    <Navbar />
  </div>
  <div className="row gap-1 mt-5">
  
    <div className="col bg-primary">
    <h2>500</h2>
    <h4>Customer</h4>
   </div>
    <div className="col bg-primary">
    <h2>500</h2>
    <h4>Design</h4>
    </div>
    <div className="col bg-primary">
    <h2>500</h2>
    <h4>Supplier</h4>
    </div>
    <div className="col bg-primary">
    <h2>500</h2>
    <h4>Sales</h4>
    </div>
  </div>
    <div className="row gap-1 mt-5">
    {/* This is how to render the nested routes using nested routes */}
      <Outlet />
    </div>
  </div>
<AddNewModal />
<AddNewModalCategory />
<AddNewModalCreateInvoice />
<AddNewModalCreateEstimate />
<AddNewModalCreateCustomer />
</>
  )
 }
   
}
