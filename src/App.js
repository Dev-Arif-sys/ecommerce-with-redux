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


function App() {
  const dispatch=useDispatch()
  if (window.performance) {
    if (performance.navigation.type == 1) {
     dispatch(userState())
    } 
    
  }

  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/products/:id' element={<ReviewProduct></ReviewProduct>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
