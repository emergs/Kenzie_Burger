import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [currentSaleTotal, setCurrentSaleTotal] = useState(0);
  const [cartIsEmpty, setCartIsEmpety] = useState(true);
  const [productsQtd, setProductsQtd] = useState([]);

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(err => console.log(err));
  }, [])

  const getQtdProducts = (product) => {
    console.log(product);
    setProductsQtd([...productsQtd, product])
    console.log(productsQtd);
  }

  const showProducts = (word) => {
    const filter = products?.filter((elem) => {
      return elem.name.toLowerCase().includes(word.toLowerCase())
    })

    setFilteredProducts(filter)
  }

  const handleClick = ((productId) => {
    const item = products.find((elem) => {
      return elem.id === productId;
    })

    const itensCart = currentSale.some((elem) => {
      return elem.id === productId
    })

    if (!itensCart) {
      setCurrentSale([...currentSale, item])
    }
    setCurrentSaleTotal(currentSaleTotal + parseInt(item.price))
    setCartIsEmpety(false);
  });

  const removeItem = ((productId) => {
    const inCart = currentSale.filter((elem) => {
      return elem.id !== productId
    })

    const itemDeleted = currentSale.filter((elem) => {
      return elem.id === productId
    })

    inCart.length > 0 ?
      setCurrentSale(inCart, setCurrentSaleTotal(currentSaleTotal - itemDeleted[0].price))
      :
      setCartIsEmpety(true, setCurrentSaleTotal(currentSaleTotal - itemDeleted[0].price));
  })

  const removeAllItens = (() => {
    setCurrentSale([]);
    setCurrentSaleTotal([]);
    setCartIsEmpety(true);
  })

  // const totalPrice = currentSaleTotal.reduce((previous, current) => {
  //   return previous + current.price
  // }, 0)
  // const totalPrice = currentSaleTotal

  const addPrice = (value) => {
    setCurrentSaleTotal(currentSaleTotal + parseInt(value))
  }

  const subtractPrice = (value) => {
    setCurrentSaleTotal(currentSaleTotal - parseInt(value))
  }

  return (
    <div className="App">
      <Header showProducts={showProducts}
      />
      <div className='contentMain'>
        <ProductsList products={products} filteredProducts={filteredProducts} handleClick={handleClick} />
        <Cart currentSale={currentSale} currentSaleTotal={currentSaleTotal} removeItem={removeItem} removeAllItens={removeAllItens} cartIsEmpty={cartIsEmpty} addPrice={addPrice} subtractPrice={subtractPrice} getQtdProducts={getQtdProducts} />
      </div>
    </div>
  );
}

export default App;
