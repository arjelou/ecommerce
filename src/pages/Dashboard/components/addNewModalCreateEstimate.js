import React from 'react';
import '../../../global.css';

export default class addNewModalCreateEstimate extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        customerList: [],
        notificationList: [],
    }
}
// get all customers
componentDidMount() {
    fetch('http://localhost:4002/customer')
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        this.setState({ 
        customerList: [...response]
        })
    })

    fetch(`http://localhost:4002/allnotification`)
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        this.setState({ 
            notificationList: [...response]
        })
    })
}


render() {
return (
<>
<div className="modal fade" id="addNewModalCreateEstimates" tabindex="-1" aria-labelledby="addNewModalCreateEstimatesLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="addNewModalCreateEstimatesLabel">Create New Estimates</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <label>Customer Name</label>
                <select className="inpuInactive" name='dcategory'>
                    {
                    this.state.customerList.map((customer) => {
                        return (
                            <>
                            <option value={customer.fullname} name={customer.fullname}>{customer.fullname}</option>
                            </>
                        )})
                    }
                </select>
                <label>Quotation Request</label>
                <select className="inpuInactive" name='dcategory'>
                    {
                    this.state.notificationList.map((notification) => {
                        return (
                            <>
                            <option value={notification.id}>{notification.id}</option>
                            </>
                        )})
                    }
                    </select>
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
