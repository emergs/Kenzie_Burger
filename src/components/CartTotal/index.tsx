import React from 'react';

export const CartTotal = ()=>{
  return(
    <>
      <div className="priceTotal">
        <span className="name">Total</span>
        {/* <span className="price">R${total.toFixed(2)}</span> */}
      </div>
      <div className='btnRemoveAll'>
        {/* <button onClick={()=>{removeAllItens()}}>Remover todos</button> */}
      </div>
    </>
  )
}