import { useState } from 'react';
import React from 'react';

export const InputSearch = ()=>{

  return(
    <>
      <input type='text' 
      /*value={"wordSearch"}*/ 
      placeholder='Digite sua pesquisa' 
      /*onChange={(event)=>{filterSearch(event.target.value)}}*/
      />

      <button 
        // onClick={()=>showProducts(wordSearch)}
        >Pesquisar
      </button>
    </>
  )
}