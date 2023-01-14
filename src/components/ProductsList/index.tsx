import React from 'react';
import {Product} from '../Product';
import { IProductsList } from './interfaces';

export const ProductsList = ()=>{

  return(
    <ul className='ulProduct'>
      {/* {
        productsList?.map((elem:IProductsList)=>{
          return <Product 
            key={elem.id} 
            id={'elem.id'} 
            name={elem.name} 
            category={elem.category} 
            price={elem.price} 
            img={elem.img} 
            handleClick={" "}
          />
        })
      } */}
    </ul>
  )
}