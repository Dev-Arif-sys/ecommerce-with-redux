import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ManageProducts from './components/DashboardComponents/ManageProducts/ManageProducts';
import Shop from './pages/Shop/Shop';
import AdminRoute from './AdminRoute/AdminRoute';
import Contact from './pages/Contact/Contact';


function App() {
  const dispatch = useDispatch()
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
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/products/:id' element={<PrivateRoute />}>
          <Route path='/products/:id' element={<ReviewProduct></ReviewProduct>} />
        </Route>

        <Route path='/order' element={<PrivateRoute />}>
          <Route path='/order' element={<YourOrder></YourOrder>} />
        </Route>


        <Route exact path='/dashboard' element={<AdminRoute><Dashboard/> </AdminRoute>}>

          {/* <Route exact path='/dashboard/' element={<ManageOrders/>}></Route> */}
          <Route path={`/dashboard`} element={<AdminRoute><ManageOrders /> </AdminRoute>} />
          <Route path={`manageOrders`} element={<AdminRoute><ManageOrders /> </AdminRoute>} />

          <Route path={`addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>} />

          <Route path={`makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />

          <Route path={`manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
