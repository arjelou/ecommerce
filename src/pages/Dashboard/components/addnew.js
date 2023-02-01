import React from 'react';
import axios from 'axios';

export default class addnew extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      dname: '',
      dprice: '',
      dcategory: '',
      ddescription: ''
    }
  }
  // handleChange = event => {
  //   this.setState({
  //     dname: event.target.value,
  //     dprice: event.target.value,
  //     dcategory: event.target.value,
  //     ddescription: event.target.value
  //   });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4002/addnew', {
        dname: e.target.dname.value,
        dprice: e.target.dprice.value,
        dcategory: e.target.dcategory.value,
        ddescription: e.target.ddescription.value
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Design Name
            <input type="text" name="dname" className='inpuInactive'  />
          </label>
          <label>
            Price
            <input type="text" name="dprice" className='inpuInactive'  />
          </label>
          <label>
            Category
            <input type="text" name="dcategory" className='inpuInactive'  />
          </label>
          <label>
            Description
            <textarea type="text" name="ddescription" className='textareaInputs'  />
          </label>
          <button type="submit" className="btnDefault">Add Naw</button>
        </form>
      </div>
    )
  }
}

