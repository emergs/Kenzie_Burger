import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { IChildren } from '..';
import {api} from '../../services/api'

interface IHomeContext{
  productsList: Object[]
  products: Object[]
  filteredProducts: Object[]
}  

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider =({children}: IChildren)=>{
    const [products, setProducts] = useState<Object[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Object[]>([]);
    // const [currentSale, setCurrentSale] = useState([]);
    // const [currentSaleTotal, setCurrentSaleTotal] = useState([]);
    // const [cartIsEmpty, setCartIsEmpety] = useState(true);
    // const [wordSearch,setWordSearch] = useState('');

    const productsList = filteredProducts.length < 1 ? products : filteredProducts;

    useEffect(()=>{
      //const response = api.get('/')
      console.log('response');
      
    },[])
    // const filterSearch =(word)=>{
    //   setWordSearch(word)
    // }

    // const showProducts =(word)=>{
    //     const filter = products?.filter((elem)=>{
    //       //console.log(elem.name.toLowerCase())
    //       return elem.name.toLowerCase().includes(word.toLowerCase())
    //     }) 
  
    //     setFilteredProducts(filter)
    //   //console.log(word.toLowerCase())
    //   //console.log(filter)
    // }
  
    // const handleClick = ((productId)=>{
    //   //console.log(productId)
    //   const item = products.find((elem)=>{
    //     return elem.id === productId; 
    //   })
  
    //   const itensCart = currentSale.some((elem)=>{
    //     return elem.id === productId
    //   })
  
    //   itensCart === false ?
    //   setCurrentSaleTotal([...currentSaleTotal,item],setCurrentSale([...currentSale,item]))
    //   :
    //   setCurrentSaleTotal([...currentSaleTotal,item]);
  
    //   setCartIsEmpety(false);
    // });
    
    // const removeItem = ((productId)=>{
    //   const inCart = currentSale.filter((elem)=>{
    //     return elem.id !== productId
    //   })
      
    //   inCart.length > 0 ? 
    //   setCurrentSale(inCart, setCurrentSaleTotal(inCart))
    //   : 
    //   setCartIsEmpety(true, setCurrentSaleTotal(inCart));
    // })
  
    // const removeAllItens = (()=>{
    //   setCurrentSale([]);
    //   setCurrentSaleTotal([]);
    //   setCartIsEmpety(true);
    // })
  
    // const totalPrice = currentSaleTotal.reduce((previous,current)=>{
    //   return previous + current.price
    // },0)
    // console.log(currentSale)
    // console.log(currentSaleTotal)

    return(
      <HomeContext.Provider value={{filteredProducts, products, productsList}}>
        {children}
      </HomeContext.Provider>
    )
  }
  