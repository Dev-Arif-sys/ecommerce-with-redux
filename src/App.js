import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Signin from './pages/Signin/Signin';
import { useDispatch } from 'react-redux';
import { userState } from './Redux/Actions/AuthAction';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ReviewProduct from './pages/ReviewProduct/ReviewProduct';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Cart from './pages/Cart/Cart';
import Billing from './pages/Billing/Billing';
import YourOrder from './pages/YourOrder/YourOrder';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './components/DashboardComponents/ManageOrders/ManageOrders';
import AddProduct from './components/DashboardComponents/AddProduct/AddProduct';
import MakeAdmin from './components/DashboardComponents/MakeAdmin/MakeAdmin';


function App() {
  const dispatch=useDispatch()
  if (window.performance) {
    if (performance.navigation.type == 1) {
     dispatch(userState())
    } 
    
  }

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/billing' element={<Billing></Billing>}></Route>
    
      <Route path='/products/:id' element={<PrivateRoute/>}>
        <Route path='/products/:id' element={<ReviewProduct></ReviewProduct>}  />
      </Route>

      <Route path='/order' element={<PrivateRoute/>}>
        <Route path='/order' element={<YourOrder></YourOrder>}  />
      </Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/dashboard/manageOrders' element={<ManageOrders></ManageOrders>}></Route>
      <Route path='/dashboard/addProduct' element={<AddProduct></AddProduct>}></Route>
      <Route path='/dashboard/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
