import styles from './style.modules.css';

const CartProduct = ({id,name,category,price,img,removeItem})=>{
  return(
    <li key={id} id={id} className="productCart">
      <div className="imgCartProduct">
        <img src={img} alt={name} />
      </div>
      <div className="infoCartProduct">
        <h3>{name}</h3>
        <span className='infoCartProductCategory'>{category}</span>
        <span className='infoCartProductPrice'>{`R$ ${price},00`}</span>
      </div>
      <div className="btnRemoveItemCartProduct">
        <button onClick={()=>removeItem(id)}>Remover</button>
      </div>
    </li>
  )
}

export default CartProduct;