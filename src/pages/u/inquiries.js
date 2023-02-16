import React from 'react';

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
    
    // if(usersId === null) {
    //   alert('Please login first!');
    //   window.location.href = '/login';

    // }else{

    //   fetch(`http://localhost:4002/allnotification?id=${usersId}`)
    //   .then((res) => res.json())
    //   .then((response) => {
    //       this.setState({ 
    //       productList: [...response]
    //     })
    //   })
    // }
  }

render() {
return (
<>
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