import Product from '../Product';
import './style.modules.css';

const ProductsList = ({ products, filteredProducts, handleClick }) => {

  const productsList = filteredProducts.length < 1 ? products : filteredProducts;

  return (
    <ul className='ulProduct'>
      {
        productsList?.map((elem) => {
          return <Product key={elem.id} id={elem.id} name={elem.name} category={elem.category} price={elem.price} img={elem.img} handleClick={handleClick} />
        })
      }
    </ul>
  )
}

export default ProductsList;