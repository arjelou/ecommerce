import React from 'react';

export default class dashboard extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
 
 }

 render() {
     return (
<>
   
<div className="container">
<div className='row'>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href=".">ACMADE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <ul className="navbar-nav justify-content-start">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=".">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href=".">Customer</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sales
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href=".">List of Invoice</a></li>
            <li><a className="dropdown-item" href=".">Create Estimates</a></li>
            <li><a className="dropdown-item" href=".">Create Invoice</a></li>
          </ul>
        </li>
        <li className="list-group-item d-flex align-items-start">
          <a className="nav-link me-auto" aria-current="page" href=".">Notification</a>
          <span className="badge bg-primary rounded-pill">2</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
    <h5>List of style</h5>
    <div class="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
</div>
    </div>
    <div className="col-4 bg-primary">col-4</div>
  </div>
</div>

</>
  )
 }
   
}
