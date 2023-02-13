import React from 'react';
import MainNavbar from './mainNavbar';

export default class inquiries extends React.Component  {
  constructor(props) {
      super(props);
      this.state = {
          productList: [],
      }
  }

  componentDidMount() {
    const usersId = document.cookie.split(';')[0].split('=')[1];
    console.log(usersId);

    fetch(`http://localhost:4002/allnotification?id=${usersId}`)
    .then((res) => res.json())
    .then((response) => {
        this.setState({ 
        productList: [...response]
      })
    })
  }


//Update product
// selectProduct(product,price,category,description,index,e) {
//   document.getElementById("new-todo-id").value = index;
//     document.getElementById("new-todo-input").value = product;
//       document.getElementById("new-todo-input1").value = price;
//     document.getElementById("new-todo-input2").value = category;
//   document.getElementById("new-todo-input3").value = description;
// }

render() {
return (
<>
<MainNavbar />
<div className='container'>
    <div className='row'>
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
              
              this.state.productList.map((product,index,usersId) =>{

                if(usersId === product.id){
                  console.log(usersId);
                  console.log(true)
                }else{
                  console.log(false)
                }

                
                return (
                  <>
                  <tr key={index}>
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
    </div>
</div>
</>
)}
}
