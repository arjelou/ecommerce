import React from 'react';

export default class allDesigns extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:4002/')
        .then((res) => res.json())
        .then((response) => {
          this.setState({ 
            productList: [...response]
          })
        })
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
          <td><a href='.'>{product.product_name}</a></td>
          <td>{product.product_price}.00</td>
          <td>{product.product_caterogy}</td>
          <td>{product.product_description}</td>
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
