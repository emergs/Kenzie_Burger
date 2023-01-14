import {InputSearch} from '../InputSearch';
import {Logo} from '../Logo';
import React from 'react';

export const Header = ()=>{
  return(
    <div className='header'>
      <Logo/>
      <InputSearch/>
    </div>
  )
}