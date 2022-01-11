import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
