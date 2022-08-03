import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [currentSaleTotal, setCurrentSaleTotal] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response=> response.json())
    .then(response=>setProducts(response))
    .catch(err=>console.log(err));
  },[])

  const showProducts =(word)=>{
      const filter = products?.filter((elem)=>{
        //console.log(elem.name.toLowerCase())
        return elem.name.toLowerCase().includes(word.toLowerCase())
      }) 

      setFilteredProducts(filter)
    //console.log(word.toLowerCase())
    //console.log(filter)
  }

  const handleClick = ((productId)=>{
    //console.log(productId)
    const item = products.find((elem)=>{
      return elem.id === productId; 
    })

    const itensCart = currentSale.some((elem)=>{
      return elem.id === productId
    })

    itensCart === false ?
    setCurrentSaleTotal([...currentSaleTotal,item],setCurrentSale([...currentSale,item]))
    
    :
    setCurrentSaleTotal([...currentSaleTotal,item]);
  });
  
  const removeItem = ((productId)=>{
    const filter = currentSale.filter((elem)=>{
      return elem.id !== productId
    })
    setCurrentSale(filter)
    setCurrentSaleTotal(filter)
  })

  const removeAllItens = (()=>{
    setCurrentSale([]);
    setCurrentSaleTotal([]);
  })

  const totalPrice = currentSaleTotal.reduce((previous,current)=>{
    return previous + current.price
  },0)
  console.log(currentSale)
  console.log(currentSaleTotal)

  return (
    <div className="App">
      <Header showProducts={showProducts}
      />
      <div className='contentMain'>
        <ProductsList products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
        <Cart currentSale={currentSale} totalPrice={totalPrice} removeItem={removeItem} removeAllItens={removeAllItens}/>
      </div>
    </div>
  );
}

export default App;
