import React from 'react';
import Navbar from './navbar';
import AddNewModal from './addNewModal';

export default class dashboard extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      product_list: [],
    }
 
 }

componentDidMount() {
  fetch('http://localhost:4001/products')
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    this.setState({ 
      product_list: [...response]
    })
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
    <div className="col">
    <div className='d-flex gap-2'>
      <h5>All Design</h5>
      <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</button>
    </div>
    <div class="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Regular Price</th>
      <th scope="col">SKU</th>
      <th scope="col">Categories</th>
    </tr>
  </thead> 
  <tbody class="table-group-divider">
    
    {
      this.state.product_list.map((product,index) =>{
        return (
          <>
          <tr key={index}>
          <th scope="row">{product.id}</th>
          <td><a href='.'>{product.product_name}</a></td>
          <td>{product.product_price}.00</td>
          <td>{product.product_sku}</td>
          <td>{product.product_category}</td>
          </tr>
          </>
        )
      })
    }
  </tbody>
</table>
</div>
</div>
</div>
</div>
<AddNewModal />
</>
  )
 }
   
}
