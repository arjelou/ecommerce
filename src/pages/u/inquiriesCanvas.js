import React from 'react';
export default class inquiriesCanvas extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        productList: [],
    }
}
componentDidMount() {
    const usersId = document.cookie.split(';')[0].split('=')[1];
    console.log(usersId);
    console.log(document.cookie);
    if(usersId === null) {
      alert('Please login first!');
      window.location.href = '/login';
    }else{
      fetch(`http://localhost:4002/allnotification?id=${usersId}`)
      .then((res) => res.json())
      .then((response) => {
          this.setState({ 
          productList: [...response]
        })
      })
    }
  }

render() {
  return (
<>
<div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">All Inquiries</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
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
                    }else{}
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
</>
)}
}
