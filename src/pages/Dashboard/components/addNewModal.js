import React from 'react';
import '../../../global.css';
import axios from 'axios';

export default class addNewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            category: []
        }
    }
//GET ALL THE CATEGORY AND DISPLAY VALUES ON THE SELECTED VALUES
componentDidMount() {
    fetch('http://localhost:4002/category')
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        this.setState({ 
        category: [...response]
        })
    })
}

//onFileChanged
onFileChange = (e) => {
    this.setState({image: e.target.files[0]})
}

//add new design
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
                    <input type="file" className="inpuInactive" name='profileImage' onChange={this.onFileChange}/>
                    <label>Product Name</label>
                    <input type="text" className="inpuInactive" name='dname' placeholder="Product Name"/>
                    <label className=''>Regular Price</label>
                    <input type="number" className="inpuInactive" name='dprice' placeholder="Regular Price"/>
                    <label className=''>Category</label>
                    <select className="inpuInactive" name='dcategory'>
                    {
                    this.state.category.map((category, inder) => {
                        return (
                            <>
                            <option value={category.product_category}>{category.product_category}</option>
                            </>
                        )
                    })
                    }
                    </select>
                    <label className=''>Product Details</label>
                    <textarea type="text" className="textareaInputs" name='ddescription' placeholder="Product Details" /> 
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
