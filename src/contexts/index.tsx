import React from 'react';
import { ReactNode } from 'react';
import { HomeProvider } from './HomeProvider';

export interface IChildren{
  children: ReactNode;
}

export const Providers = ({ children }: IChildren) => {
    return(
        <HomeProvider>
            {children}
        </HomeProvider>
    )
}