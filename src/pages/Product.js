import React from 'react';
import axios from 'axios';
export default class Product extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    product_name: '',
    id: window.location.href.split('/')[4]
  }
}
componentDidMount = () => {
console.log(this.state.id);
  fetch(`${process.env.REACT_APP_URL}/product?id=${this.state.id}`)
  .then((res) => res.json())
  .then((response) => {
    this.setState({ 
      product_name: [...response]
    })
  })
}
quotationForm =(e) =>{
  e.preventDefault();
  let userID = document.cookie.split(';')[0].split('=')[1];
  if(userID == null){
    alert('You must login first!')
    window.location.href ='/login';
  }else{
    axios.post(`https://quick-grapes-stare-124-107-182-208.loca.lt/quotation`,{
      userID: userID,
      design: e.target.design.value,
      quantity: e.target.quatity.value,
      description: e.target.description.value
  },alert('Your Quotation was successfully sent!'),
    window.location.href ='/designs'
  ).then((response) =>{
    console.log(response);
  });
  }
}
render() {
  return (
<>
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-lg-8 d-flex gap-3'>
        <img src='https://via.placeholder.com/150x200' alt='produc-img' height={500}/>
        <img src='https://via.placeholder.com/150x200' alt='produc-img' height={200}/>
      </div>
      <div className='col-lg-4  product'>
        <div className='mt-3'>
          <h4>Helo</h4>
          <form onSubmit={this.quotationForm}>
            <button className='btnDefault mb-4 mt-4'>GET YOUR FREE SAMPLE</button> 
            <span className=''>You can sent message here!</span><br />
            <label htmlFor='design' className='mt-2'>Design</label>
            <input type='text' name='design' className='inpuInactive' placeholder='Your design'/>
            <label htmlFor='quatity'>Quatity</label>
            <input type='number' name='quatity' className='inpuInactive' placeholder='500'/>
            <label htmlFor='description'>Message</label>
            <textarea type='text' name='description' className='inpuInactive' placeholder='Message' />
            <button type='submit' className='btnDefault'>Send Inquiry</button>
          </form>
          <div className='mb-3 mt-3'>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
            </span>
          </div>   
        </div>
      </div>
    </div>
  </div>
</>
)}
}


