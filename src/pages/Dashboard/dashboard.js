import React from 'react';
import Navbar from './components/navbar';
import AddNewModal from './components/addNewModal';
import UpdateNewModal from './components/updateNewModal';
import UpdateNewModalCategory from './components/updateNewModalCategory';
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
      customer: [],
      design: [],
    }
 }

 componentDidMount() {
  fetch('http://localhost:4002/customer')
  .then((res) => res.json())
  .then((response) => {
    const customerList = response.length
    this.setState({customer: customerList})
  })

  fetch('http://localhost:4002/product')
  .then((ress) => ress.json())
  .then((responses) => {
    const designList = responses.length
    this.setState({design: designList})
  })
}

 render() {
     return (
<>
<div className="container">
  <div className='row'>
    <Navbar />
  </div>
  <div className="row gap-1 mt-5">
  
    <div className="col dashboard text-center">
      <h2>{this.state.customer}</h2>
      <h4>Customer</h4>
    </div>
    <div className="col dashboard text-center">
    <h2>{this.state.design}</h2>
    <h4>Design</h4>
    </div>
    <div className="col dashboard text-center">
    <h2>0</h2>
    <h4>Supplier</h4>
    </div>
    <div className="col dashboard text-center">
    <h2>0</h2>
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
<UpdateNewModal />
<UpdateNewModalCategory />
</>
  )
 }
   
}
