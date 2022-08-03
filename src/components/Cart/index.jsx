import styles from './style.modules.css';
import CartProduct from '../CartProduct';
import CartTotal from '../CartTotal';

const Cart = ({currentSale,totalPrice,removeItem,removeAllItens})=>{

  // const totalPrice = currentSaleTotal.reduce((previous,current)=>{
  //   return previous.price + current.price
  // },0)
  
  return(
    <div className='cart'>
      <div className="cartTitle">
        <h3>Carrinho de Compras</h3>
      </div>
      <div className='divCartProduct'>
        <ul>
          {
            currentSale.map((elem)=>{
              return <CartProduct key ={elem.id} id={elem.id} name={elem.name} category={elem.category} price={elem.price} img={elem.img} removeItem={removeItem}/>
            })
          }
        </ul>
      </div>
      <div className='divCartTotal'>
        <hr />
        <CartTotal total={totalPrice} removeAllItens={removeAllItens}/>
      </div>
    </div>
  )
}

export default Cart;