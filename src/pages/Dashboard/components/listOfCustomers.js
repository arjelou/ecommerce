import React from 'react'

export default class listOfCustomers extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        listofcustomer: [],
  }
}
componentDidMount() {
    fetch('http://localhost:4002/customer')
    .then((res) => res.json())
    .then((response) => {
      console.log('Customer!',response);
      this.setState({ 
        listofcustomer: [...response]

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
        <th scope="col">ID</th>
        <th scope="col">Full Name</th>
        <th scope="col">Email</th>
        <th scope="col">Comppany</th>
        <th scope="col">Total Employees</th>
        <th scope="col">Location/zipcode</th>
      </tr>
    </thead> 
    <tbody class="table-group-divider">
      {
        this.state.listofcustomer.map((product,index) =>{
          return (
            <>
            <tr key={index}>
            <th scope="row">{product.id}</th>
            <td><a href='.'>{product.fullname}</a></td>
            <td>{product.email}.00</td>
            <td>{product.company}</td>
            <td>{product.total_employee}</td>
            <td>{product.zipcode}</td>
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
