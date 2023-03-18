import InputSearch from '../InputSearch';
import Logo from '../Logo';
import './style.modules.css';


const Header = ({ showProducts }) => {
  return (
    <div className='header'>
      <main>
        <Logo />
        <InputSearch showProducts={showProducts} />
      </main>
    </div>
  )
}

export default Header;