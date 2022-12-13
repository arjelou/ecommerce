import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import ProductListing from './pages/ProductListing/ProductListing';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='productListing'  element={<ProductListing />} />
        <Route path='product'  element={<Product />} />
        <Route path='cart'  element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
