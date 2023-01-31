import React from 'react';
import '../../../global.css';
import axios from 'axios';

export default class addnew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        }
    }

addProduct = (e) => {
    e.preventDefault();
    alert(e.target.pname.value)
    axios.post('http://localhost:4001/addnew', {
        pname: e.target.pname.value,
        pprice: e.target.pprice.value,
        pcategory: e.target.pcategory.value,
        pdetail: e.target.pdetail.value,
    }).then((response) => {
        this.setState({ 
        products: [
        ...this.state.insert ]
       
    })}).catch((error) => {
        alert(error.message);
    })
    
}

render() {
    return (
<>
    
    <form onSubmit={this.addProduct}>
        <div className="">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addNewModalLabel">Add New Design</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
        
            <label>Product Name</label>
            <input type="text" className="inpuInactive" name='pname' id='pname' placeholder="Product Name"/>
            <label className=''>Regular Price</label>
            <input type="number" className="inpuInactive" name='pprice' id='pprice' placeholder="Regular Price"/>
            <label className=''>Category</label>
            <select className="inpuInactive">
                <option defaultValue="helo"></option>
                    <option value="cat1">Cat 1</option>
                <option value="cat2">Cat 2</option>
            </select>
            <label className=''>Product Details</label>
            <textarea type="text" className="textareaInputs" name='pdetail' id='pdetail' placeholder="Product Details" /> 
            </div>
            <div className="modal-footer">
                <button type="submit" className="btnDefault" rows="3">ADD NEW DESIGN</button>
            </div>
            </div>
        </div>
        </form>  
</>
)}
}
