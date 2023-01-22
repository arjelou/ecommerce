import React from 'react';
import Navbar from './components/navbar';
import AddNewModal from './components/addNewModal';
import '../../global.css';
import AllDesigns from './components/categories';
import AddNewModalCategory from './components/addNewModalCategory';


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
      {/* All DESIGN COMPONENT */}
      <AllDesigns />
    </div>
  </div>
<AddNewModal />
<AddNewModalCategory />
</>
  )
 }
   
}
