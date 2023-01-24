import React from 'react'

export default class listOfCustomers extends React.Component  {
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
             <div className="col">
      <div className='d-flex justify-content-md-between gap-2'>
        <h5>List Of Customers</h5>
        <button type="button" className='btnSelection' data-bs-toggle="modal" data-bs-target="#addNewModalCreateCustomer">Add New</button>
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
            </>
          )
    }
}
