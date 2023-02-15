import React from 'react';
import axios from 'axios';
import { BsPencilSquare,BsDashSquare } from 'react-icons/bs';


export default class allDesigns extends React.Component  {
  constructor(props) {
      super(props);
      this.state = {
          productList: [],
      }
  }

  componentDidMount() {
    fetch('http://localhost:4002/product/')
    .then((res) => res.json())
    .then((response) => {
      this.setState({ 
        productList: [...response]
      })
    })
  }

  //Delete a product
  deleteRow(id, e){  
    const confirmDelete = window.confirm(`Do you want to delete?`);
    if (confirmDelete){
      axios.delete(`http://localhost:4002/product/${id}`)
      .then((response) => {
      return(
        {
          ...this.state.product
        }
      )
      });
  } else{ 
  }
}

//Update product
selectProduct(product,price,category,description,index,e) {
  document.getElementById("new-todo-id").value = index;
    document.getElementById("new-todo-input").value = product;
      document.getElementById("new-todo-input1").value = price;
    document.getElementById("new-todo-input2").value = category;
  document.getElementById("new-todo-input3").value = description;
}

render() {
return (
<>
  <div className="col">
    <div className='d-flex justify-content-md-between gap-2'>
      <h5>All Design</h5>
      <button type="button" className='btnSelection' data-bs-toggle="modal" data-bs-target="#addNewModal">Add New</button>
    </div>
    <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Regular Price</th>
              <th scope="col">Category</th>
              <th scope="col">Details</th>
            </tr>
          </thead> 
          <tbody className="table-group-divider">
            {
              this.state.productList.map((product,index) =>{
                return (
                  <>
                  <tr key={index}>
                  <th scope="row">{product.id}</th>
                  <td>{product.product_name}</td>
                  <td>{product.product_price}.00</td>
                  <td>{product.product_category}</td>
                  <td>{product.product_description}</td>
                    <BsPencilSquare size={40} title='Edit' data-bs-toggle="modal" data-bs-target="#updateNewModal" onClick={(e) => this.selectProduct(
                    product.product_name,
                    product.product_price,
                    product.product_category,
                    product.product_description,
                    product.id,
                    e)} className='dashboardIcon'/>
                    <BsDashSquare size={40} title='Remove' color='red' onClick={(e) => this.deleteRow(product.id, e)} className='dashboardIcon'/>
                  </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
  </div>
</>
)}
}
