import React from 'react';
import {CartProduct} from '../CartProduct';
import {CartTotal} from '../CartTotal';

export const Cart = ()=>{

  return(<></>
    // <div className='cart'>
    //   <div className="cartTitle">
    //     <h3>Carrinho de Compras</h3>
    //   </div>
    //   <div className='divCartProduct'>
    //   {
    //     cartIsEmpty ?
    //     <div className="cartEmpty">
    //       <h3>O carrinho está vazio</h3>
    //       <span>Adicione itens</span>
    //     </div>
    //     :
    //     <ul>
    //       {
    //         currentSale.map((elem)=>{
    //           return <CartProduct key ={elem.id} id={elem.id} name={elem.name} category={elem.category} price={elem.price} img={elem.img} removeItem={removeItem}/>
    //         })
    //       }
    //     </ul>
    //   }
    //   </div>
    //   <div className='divCartTotal'>
    //     <hr />
    //     <CartTotal/>
    //   </div>
    // </div>
  )
}
