import React from "react"
// import Cart from "../components/Cart"
import {Header} from "../components/Header"
import {ProductsList} from "../components/ProductsList"

export const Home = () =>{
    return(
      <div className="App">
      <Header/>
      <div className='contentMain'>
        <ProductsList />
        {/* <Cart /> */}
      </div>
    </div>
    )
} 