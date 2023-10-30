import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ResponsiveAppBar from './components/Navbar';
import SignIn from './components/Login';
import SignUp from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
    
     <Routes>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/product' element={<ProductList/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
