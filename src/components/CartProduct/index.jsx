import './style.modules.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const CartProduct = ({ id, name, category, price, img, removeItem, addPrice, subtractPrice, getQtdProducts }) => {


  const [qtd, setQtd] = useState(1)

  const priceUp = () => {
    setQtd(qtd + 1)
    addPrice(price)
    getQtdProducts({ id: id, price: price, qtd: qtd })
  }

  const priceDown = () => {
    if (qtd > 1) {
      setQtd(qtd - 1)
      subtractPrice(price)
      getQtdProducts({ id: id, price: price, qtd: qtd })
    }
  }



  return (
    <li key={id} id={id} className="productCart">
      <div className="imgCartProduct">
        <img src={img} alt={name} />
      </div>
      <div className="infoCartProduct">
        <h3>{name}</h3>
        <span className='infoCartProductCategory'>{category}</span>
        <span className='infoCartProductPrice'>{`R$ ${(price * qtd).toFixed(2)}`}</span>
      </div>
      <div>
        <button onClick={() => priceUp()}>+</button>
        <span>{qtd}</span>
        <button onClick={() => priceDown()}>-</button>
      </div>
      <div className="btnRemoveItemCartProduct">
        <button onClick={() => removeItem(id)}><AiOutlineClose /></button>
      </div>
    </li>
  )
}

export default CartProduct;