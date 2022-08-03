import styles from './style.modules.css';

const CartTotal = ({total, removeAllItens})=>{
  return(
    <>
      <div className="priceTotal">
        <span className="name">Total</span>
        <span className="price">{total}</span>
      </div>
      <div className='btnRemoveAll'>
        <button onClick={()=>{removeAllItens()}}>Remover todos</button>
      </div>
    </>
  )
}

export default CartTotal;