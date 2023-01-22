import React from 'react';
import '../../../global.css';

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
    <div className="modal fade" id="addNewModal" tabindex="-1" aria-labelledby="addNewModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addNewModalLabel">Add New Design</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <label>Product Name</label>
                    <input type="text" className="inpuInactive" placeholder="Product Name"/>
                    <label className=''>Regular Price</label>
                    <input type="number" className="inpuInactive" placeholder="Regular Price"/>
                    <label className=''>SKU</label>
                    <input type="text" className="inpuInactive" placeholder="SKU"/>
                    <label className=''>Category</label>
                    <select className="inpuInactive">
                        <option selected>Select Category</option>
                        <option value="">Cat 1</option>
                        <option value="">Cat 2</option>
                    </select>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btnDefault">ADD NEW DESIGN</button>
            </div>
            </div>
        </div>
    </div>             
</>
)}
}
