import './App.css';
import { Routes,Route } from 'react-router-dom';
import Index from '../src/pages/index';
import ProductListing from './pages/ProductListing/ProductListing';
import Product from './pages/Product/Product';
import Pickyourstyle from './components/pickyourstyle';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Dashboard from './pages/Dashboard/dashboard';
import Categories from './pages/Dashboard/components/categories';
import AllDesigns from './pages/Dashboard/components/allDesigns';
import ListOfInvoice from './pages/Dashboard/components/listOfInvoice';
import ListOfEstimates from './pages/Dashboard/components/listOfEstimates';
import ListOfCustomers from './pages/Dashboard/components/listOfCustomers';
import Notification from './pages/Dashboard/components/notification';
import Inquiries from './components/inquiries';
// import AddNewModal from './pages/Dashboard/components/addNewModal';


function App() {
  return (
    <>   
    {/* <Navbar /> */}
      <Routes>
        <Route path=''  element={<Index />} />
        <Route path='productListing'  element={<ProductListing />} />
        <Route path='product'  element={<Product />} />
        <Route path='alldesign'  element={<Pickyourstyle />} />
        <Route path='cart'  element={<Cart />} />
        <Route path='checkout'  element={<Checkout />} />
        <Route path='login'  element={<Login />} />
        <Route path='signup'  element={<Signup />} />
        <Route path='inquiries'  element={<Inquiries />} />

        <Route path='dashboard' element={<Dashboard />}>
          <Route path='categories' element={<Categories />} />
          <Route path='alldesigns' element={<AllDesigns />} />
          <Route path='listofinvoice' element={<ListOfInvoice />} />
          <Route path='listofestimates' element={<ListOfEstimates />} />
          <Route path='listofcustomers' element={<ListOfCustomers />} />
          <Route path='notification' element={<Notification />} />

          {/* <Route path='add-new-product' element={<AddNewModal />} /> */}
          
        </Route>

        {/* Dashboard Routes */}
        

      </Routes>
    </>
  );
}

export default App;
