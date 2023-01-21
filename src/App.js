import './App.css';
import { Routes,Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Index from './pages/Home/index';
import ProductListing from './pages/ProductListing/ProductListing';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/dashboard';


function App() {
  return (
    <>   
    {/* <Navbar /> */}
      <Routes>
        <Route path=''  element={<Index />} />
        <Route path='productListing'  element={<ProductListing />} />
        <Route path='product'  element={<Product />} />
        <Route path='cart'  element={<Cart />} />
        <Route path='checkout'  element={<Checkout />} />
        <Route path='login'  element={<Login />} />
        <Route path='signup'  element={<Signup />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
