import React from 'react';

export default class addNewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {},
        }
    }

render() {
    return (
<>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Design</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="Product Name"/>
                    <label className='mt-2'>Regular Price</label>
                    <input type="number" className="form-control" placeholder="Regular Price"/>
                    <label className='mt-2'>SKU</label>
                    <input type="text" className="form-control" placeholder="SKU"/>
                    <select className="form-select mt-2">
                        <option selected>Select Category</option>
                        <option value="">Cat 1</option>
                        <option value="">Cat 2</option>
                    </select>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btncompleteOrdder">ADD NEW</button>
            </div>
            </div>
        </div>
    </div>             
</>
)}
}
