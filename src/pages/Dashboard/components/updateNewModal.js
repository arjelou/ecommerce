import React from 'react';
import '../../../global.css';
import axios from 'axios';

export default class updateNewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            category: [],
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


    updateProduct = (id,e) =>{
        const productID =  document.getElementById("new-todo-id").value;
        const productName =  document.getElementById("new-todo-input").value;
        const productPrice =  document.getElementById("new-todo-input1").value;
        const productCategory =  document.getElementById("new-todo-input2").value;
        const productDescription =  document.getElementById("new-todo-input3").value;

        axios.put(`http://localhost:4002/update/${productID}` , {
            productID,
            productName,
            productPrice,
            productCategory,
            productDescription
        })
          .then(response => {
            this.setState({
              tasks: [
                ...response
              ]
            })
        });
    }

render() {
    return (
<>
<div className="modal fade" id="updateNewModal" tabIndex="-1" aria-labelledby="updateNewModalLabel" aria-hidden="true">
    <form onSubmit={this.updateProduct}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="updateNewModalLabel">Update Product</h1>
                        <input type="text" id="new-todo-id" name='id' className='updateID' disabled/>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label>Product Name</label>
                    <input type="text" className="inpuInactive"  id="new-todo-input" name='dname' placeholder="Product Name"/>
                    <label className=''>Regular Price</label>
                    <input type="number" className="inpuInactive" name='dprice' id="new-todo-input1" placeholder="Regular Price"/>
                    <label className=''>Category</label>
                    <select className="inpuInactive" name='dcategory' id="new-todo-input2">
                        {/* <option defaultValue="helo"></option>
                            <option value="cat1">Cat 1</option>
                        <option value="cat2">Cat 2</option>
                        <option value="cat3">Cat 3</option> */}
                        {
                            this.state.category.map((category, inder) => {
                                return (
                                    <option value={category.product_category}>{category.product_category}</option>
                                )
                            })
                        }
                    </select>
                    <label className=''>Product Details</label>
                    <textarea type="text" className="textareaInputs" name='ddescription' id="new-todo-input3" placeholder="Product Details" /> 
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btnDefault" rows="3">UPDATE DESIGN</button>
                </div>
            </div>
        </div>
    </form>  
</div> 

   
              
</>
)}
}
