import './style.modules.css';
import { AiOutlineClose} from 'react-icons/ai';

const CartProduct = ({id,name,category,price,img,removeItem})=>{
  return(
    <li key={id} id={id} className="productCart">
      <div className="imgCartProduct">
        <img src={img} alt={name} />
      </div>
      <div className="infoCartProduct">
        <h3>{name}</h3>
        <span className='infoCartProductCategory'>{category}</span>
        <span className='infoCartProductPrice'>{`R$ ${price.toFixed(2)}`}</span>
      </div>
      <div className="btnRemoveItemCartProduct">
        <button onClick={()=>removeItem(id)}><AiOutlineClose/></button>
      </div>
    </li>
  )
}

export default CartProduct;