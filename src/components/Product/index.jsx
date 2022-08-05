import { useState } from 'react';
import styles from './style.modules.css';

const Product = ({id,name,category,price,img, handleClick})=>{

  return(
    <li key={id} id={id} className='liProductsList'>
      <div className='productImg'>
        <img src={img} alt={name} />
      </div>
      <div className='divProductInfo'>
        <h3>{name}</h3>
        <span className='category'>{category}</span>
        <span className='price'>{`R$ ${price.toFixed(2)}`}</span>
        <button onClick={()=>handleClick(id)}>Adicionar</button>
      </div>
    </li>
  )
}

export default Product;