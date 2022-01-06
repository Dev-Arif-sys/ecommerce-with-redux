import logo from './logo.svg';
import './App.css';
import BottomHeader from './components/Header/BottomHeader/BottomHeader';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <BottomHeader></BottomHeader>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
