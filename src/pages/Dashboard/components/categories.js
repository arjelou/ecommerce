import React from 'react';
import { BsPencilSquare,BsDashSquare } from 'react-icons/bs';
import axios from 'axios';
export default class categories extends React.Component  {
constructor(props) {
    super(props);
    this.state = {
        product_list: [],
    }
}
componentDidMount() {
    fetch('http://localhost:4002/category')
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      this.setState({ 
        product_list: [...response]
      })
    })
}
//Delete a category
deleteCategory(id, e){  
  const confirmDelete = window.confirm(`Do you want to delete?`);
  if (confirmDelete){
    axios.delete(`http://localhost:4002/category/${id}`)
    .then((response) => {
    this.setState({
      category: [...this.state.product_list]
    })
    });
} else{}
}
//SELECT a category TO BE UPDATE
selectCategory(product,description,id,e) {
  document.getElementById("new-update-id").value = id;
  document.getElementById("new-update-input-cname").value = product;
  document.getElementById("new-update-input-cdescription").value = description;
}

render() {
return (
<>
<div className="col">
  <div className='d-flex justify-content-md-between gap-2'>
      <h5>All Categories</h5>
    <button type="button" className='btnSelection' data-bs-toggle="modal" data-bs-target="#addNewModalCategory">Add New</button>
  </div>
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead> 
  <tbody class="table-group-divider">
    {
      this.state.product_list.map((product,index) =>{
        return (
          <>
          <tr key={index}>
          <th scope="row">{product.id}</th>
          <td>{product.product_category}</td>
          <td>{product.category_description}</td>
          <BsPencilSquare size={40} title='Edit' className='dashboardIcon' data-bs-toggle="modal" data-bs-target="#updateNewModalCategory" onClick={(e) => this.selectCategory(
                    product.product_category,
                    product.category_description,
                    product.id,
                    e)} />
          <BsDashSquare size={40} title='Remove' color='red' onClick={(e) => this.deleteCategory(product.id, e)} className='dashboardIcon'/>
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
