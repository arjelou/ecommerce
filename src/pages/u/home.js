import React from 'react';
import Footer from "../../components/Footer";
import Pickyourstyle from '../../components/pickyourstyle';
import UNavbar from '../../components/uNavbar';
import { Outlet } from 'react-router-dom';
import InquiriesCanvas from './inquiriesCanvas';

export default class home extends React.Component {
render() {
return (
<>
<UNavbar />
<Outlet />
<InquiriesCanvas />
<Pickyourstyle />
    <hr />
    <Footer />
</>
        )
    }
}
 
