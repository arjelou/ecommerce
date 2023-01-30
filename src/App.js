import './App.css';
import { Routes,Route } from 'react-router-dom';
import Index from './pages/Home/index';
import ProductListing from './pages/ProductListing/ProductListing';
import Product from './pages/Product/Product';
import Pickyourstyle from './components/pickyourstyle';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/dashboard';
import Categories from './pages/Dashboard/components/categories';
import AllDesigns from './pages/Dashboard/components/allDesigns';
import ListOfInvoice from './pages/Dashboard/components/listOfInvoice';
import ListOfEstimates from './pages/Dashboard/components/listOfEstimates';
import ListOfCustomers from './pages/Dashboard/components/listOfCustomers';


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
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='categories' element={<Categories />} />
          <Route path='alldesigns' element={<AllDesigns />} />
          <Route path='listofinvoice' element={<ListOfInvoice />} />
          <Route path='listofestimates' element={<ListOfEstimates />} />
          <Route path='listofcustomers' element={<ListOfCustomers />} />
          
        </Route>

        {/* Dashboard Routes */}
        

      </Routes>
    </>
  );
}

export default App;
