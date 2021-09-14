import './App.css';
import Header from './Components/Header'
import VersionInput from './Components/VersionInput'
import Products from './Components/Products'
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [errorMessage, setErrorMessage] = useState()

const searchProduct = (version) => {
    const fetchProducts = async () => {
    const res = await fetch('http://localhost:49590/software/' + version)
    if(res.ok){
      const data = await res.json()
      setProducts(data);
    }else if(res.status === 400){
      setErrorMessage("Invalid request, please enter a valid version number")
    }
  }
  fetchProducts(); 
  //Call out to external service here
}
  return (
    <div className="conatiner">
     <Header />
     <VersionInput searchProducts={searchProduct} errorMessage={errorMessage}/>
     <br></br>
     <Products products={products}/>
    </div>
  );
}

export default App;
