import React from 'react';

export default class notification extends React.Component  {
  constructor(props) {
      super(props);
      this.state = {
          productList: [],
      }
  }

  componentDidMount() {
    fetch('http://localhost:4002/allnotification')
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
      <h5>All Inquiries</h5>
    </div>
    <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Design</th>
              <th scope="col">Quantity</th>
              <th scope="col">Descripiton</th>
              <th scope="col">Date</th>
            </tr>
          </thead> 
          <tbody className="table-group-divider">
            {
              this.state.productList.map((product,index) =>{
                return (
                  <>
                  <tr key={this.index}>
                  <th scope="row">{product.id}</th>
                  <td>{product.design}</td>
                  <td>{product.quantity}</td>
                  <td>{product.description}</td>
                  <td>{product.createdAt}</td>
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
