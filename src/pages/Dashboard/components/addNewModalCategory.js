import React from 'react';
import '../../../global.css';
import axios from 'axios';

export default class addNewModalCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {},
        }
    }
    addCategory = (e) => {
        axios.post('http://localhost:4002/add-new-category', {
            cname: e.target.cname.value,
            cdescription: e.target.cdescription.value,
            }, 
            alert('NEW CATEGORY ADDED SUCCESSFULY!'
            ))
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
       
    }    

render() {
    return (
<>
    <div className="modal fade" id="addNewModalCategory" tabindex="-1" aria-labelledby="addNewModalCategoryLabel" aria-hidden="true">
    <form onSubmit={this.addCategory}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addNewModalCategoryLabel">Add New Category</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
                    <label>Category Name</label>
                    <input type="text" className="inpuInactive" name='cname' placeholder="Category Name"/>
                    <label className=''>Description</label>
                    <textarea type="text" className="inpuInactive" name='cdescription' placeholder="Description"/>
               
            </div>
            <div className="modal-footer">
                <button type="submit" className="btnDefault">ADD NEW CATEGORY</button>
            </div>
            </div>
        </div>
    </form>
</div>             
</>
)}
}
