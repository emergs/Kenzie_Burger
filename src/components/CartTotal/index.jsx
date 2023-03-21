import './style.modules.css';

const CartTotal = ({ currentSaleTotal, removeAllItens }) => {
  return (
    <>
      <div className="priceTotal">
        <span className="name">Total</span>
        <span className="price">R${currentSaleTotal.toFixed(2)}</span>
      </div>
      <div className='btnRemoveAll'>
        <button onClick={() => { removeAllItens() }}>Remover todos</button>
      </div>
    </>
  )
}

export default CartTotal;