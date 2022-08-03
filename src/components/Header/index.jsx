import InputSearch from '../InputSearch';
import Logo from '../Logo';
import styles from './style.modules.css';


const Header = ({showProducts})=>{
  return(
    <div className='header'>
      <Logo/>
      <InputSearch showProducts={showProducts}/>
    </div>
  )
}

export default Header;