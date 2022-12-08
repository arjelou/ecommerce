import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
        <>
            <nav className='navbar navbar-expand-md'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='.'>ACMADE</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        {/* <ul>
                            <li>
                                <a className='nav-link active' aria-current='page' href='.'>Home</a>
                            </li>
                        </ul> */}
                        <button className='btn btn-outline-info m-1'>Home</button>
                        <button className='btn btn-outline-info m-1'>Track Parcel</button>
                        <button className='btn btn-outline-info m-1'>Spring Sale</button>
                        <button className='btn btn-outline-info m-1'>New Arrival</button>
                        <button className='btn btn-outline-info m-1'>Bestsellers</button>
                        <button className='btn btn-outline-info m-1'>Product</button>
                    </div>
                </div>
            </nav>
        </>
      )
    }
  }
  
