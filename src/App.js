import { Routes,Route } from 'react-router-dom';
import Index from '../src/pages/index';
import Home from './pages/u/home';
import Product from './pages/Product';
import Pickyourstyle from './components/pickyourstyle';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Dashboard from './pages/Dashboard/dashboard';
import Categories from './pages/Dashboard/components/categories';
import AllDesigns from './pages/Dashboard/components/allDesigns';
import ListOfInvoice from './pages/Dashboard/components/listOfInvoice';
import ListOfEstimates from './pages/Dashboard/components/listOfEstimates';
import ListOfCustomers from './pages/Dashboard/components/listOfCustomers';
import Notification from './pages/Dashboard/components/notification';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <>   
      <Routes>
        <Route path=''  element={<Index />} />
        <Route path='/designs'  element={<Home />} />  
        <Route path='/product/:id'  element={<Product />} />
        <Route path='/alldesign'  element={<Pickyourstyle />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/signup'  element={<Signup />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='categories' element={<Categories />} />
          <Route path='alldesigns' element={<AllDesigns />} />
          <Route path='listofinvoice' element={<ListOfInvoice />} />
          <Route path='listofestimates' element={<ListOfEstimates />} />
          <Route path='listofcustomers' element={<ListOfCustomers />} />
          <Route path='notification' element={<Notification />} />          
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
