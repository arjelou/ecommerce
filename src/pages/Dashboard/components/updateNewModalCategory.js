import React from 'react';
import '../../../global.css';
import axios from 'axios';

export default class updateNewModalCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {},
        }
    }

// SELECT AND UPDATE CATEGORY
updateCategory = (id,e) =>{
    const categoryID =  document.getElementById("new-update-id").value;
    const categoryName =  document.getElementById("new-update-input-cname").value;
    const categoryDescription =  document.getElementById("new-update-input-cdescription").value;
   

    axios.put(`http://localhost:4002/update-category/${categoryID}` , {
        categoryID,
        categoryName,
        categoryDescription,
        
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
    <div className="modal fade" id="updateNewModalCategory" tabindex="-1" aria-labelledby="updateNewModalCategoryLabel" aria-hidden="true">
    <form onSubmit={this.updateCategory}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="updateNewModalCategoryLabel">Update Category</h1>
                <input type="text" id="new-update-id" name='id' className='updateID' disabled/>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <label>Category Name</label>
                <input type="text" className="inpuInactive" id="new-update-input-cname" name='cname' placeholder="Category Name"/>
                <label className=''>Description</label>
                <textarea type="text" className="inpuInactive" id="new-update-input-cdescription" name='cdescription' placeholder="Description"/>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btnDefault">UPDATE CATEGORY</button>
            </div>
            </div>
        </div>
    </form>
</div>             
</>
)}
}
