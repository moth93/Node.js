import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <AddProduct/>
      <ProductList/>
    </div>
  );
}

export default App;
