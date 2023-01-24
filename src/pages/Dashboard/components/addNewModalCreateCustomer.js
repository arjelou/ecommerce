import React from 'react';
import '../../../global.css';

export default class addNewModalCreateCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {},
        }
    }

render() {
    return (
<>
    <div className="modal fade" id="addNewModalCreateCustomer" tabindex="-1" aria-labelledby="addNewModalCreateCustomerLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addNewModalCreateCustomerLabel">Create New Customer</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <label>Create Invoice</label>
                    <input type="text" className="inpuInactive" placeholder="Category Name"/>
                    <label className=''>Description</label>
                    <textarea type="text" className="inpuInactive" placeholder="Description"/>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btnDefault">ADD NEW CATEGORY</button>
            </div>
            </div>
        </div>
    </div>             
</>
)}
}
