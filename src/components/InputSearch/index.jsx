import { useState } from 'react';
import styles from './style.modules.css';

const InputSearch = ({showProducts})=>{
  const [wordSearch,setWordSearch] = useState('');

  const filterSearch =(word)=>{
    setWordSearch(word)
  }

  return(
    <>
      <input type='text' value={wordSearch} placeholder='Digite sua pesquisa' onChange={(event)=>{filterSearch(event.target.value)}}/>
      <button onClick={()=>showProducts(wordSearch)}>Pesquisar</button>
    </>
  )
}

export default InputSearch;