import 'bootstrap/dist/css/bootstrap.min.css';
import { positions, Provider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoute from './AdminRoute/AdminRoute';
import './App.css';
import AddProduct from './components/DashboardComponents/AddProduct/AddProduct';
import MakeAdmin from './components/DashboardComponents/MakeAdmin/MakeAdmin';
import ManageOrders from './components/DashboardComponents/ManageOrders/ManageOrders';
import ManageProducts from './components/DashboardComponents/ManageProducts/ManageProducts';
import Billing from './pages/Billing/Billing';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import ReviewProduct from './pages/ReviewProduct/ReviewProduct';
import Shop from './pages/Shop/Shop';
import Signin from './pages/Signin/Signin';
import YourOrder from './pages/YourOrder/YourOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { userState } from './Redux/Actions/AuthAction';

function App() {
  const dispatch = useDispatch()
  if (window.performance) {
    if (performance.navigation.type == 1) {
      dispatch(userState())
    }

  }

  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.FADE
  }

  return (
    <Provider template={AlertTemplate} {...options}>
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
    </Provider>
  );
}

export default App;
