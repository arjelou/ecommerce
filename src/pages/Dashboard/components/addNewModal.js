import React from 'react';
import '../../../global.css';
import axios from 'axios';

export default class addNewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        }
    }

addProduct = (e) => {
    axios.post('http://localhost:4002/addnew', {
        dname: e.target.dname.value,
        dprice: e.target.dprice.value,
        dcategory: e.target.dcategory.value,
        ddescription: e.target.ddescription.value,
        }, 
        alert('NEW DESIGN ADDED SUCCESSFULY!'
        ))
        .then(res => {
        console.log(res);
        console.log(res.data);
    })
}

render() {
    return (
<>
<div className="modal fade" id="addNewModal" tabIndex="-1" aria-labelledby="addNewModalLabel" aria-hidden="true">
    <form onSubmit={this.addProduct}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addNewModalLabel">Add New Design</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label>Product Name</label>
                    <input type="text" className="inpuInactive" name='dname' id='pname' placeholder="Product Name"/>
                    <label className=''>Regular Price</label>
                    <input type="number" className="inpuInactive" name='dprice' id='pprice' placeholder="Regular Price"/>
                    <label className=''>Category</label>
                    <select className="inpuInactive" name='dcategory'>
                        <option defaultValue="helo"></option>
                            <option value="cat1">Cat 1</option>
                        <option value="cat2">Cat 2</option>
                        <option value="cat3">Cat 3</option>
                    </select>
                    <label className=''>Product Details</label>
                    <textarea type="text" className="textareaInputs" name='ddescription' id='pdetail' placeholder="Product Details" /> 
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btnDefault" rows="3">ADD NEW DESIGN</button>
                </div>
            </div>
        </div>
    </form>  
</div> 

   
              
</>
)}
}
