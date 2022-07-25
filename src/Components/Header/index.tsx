


import styles from './styles.module.scss'

import Link from 'next/link';
import { Navbar } from '../Navbar';
import { useContext, useState } from 'react';
import { UserLogged } from '../UserLogged';
import MyContext from '../../Context/MyContext';




type loggedType = boolean;


export function Header(){

   
    const {islogged}:any = useContext(MyContext);

    return(

        <>

        <div>
            <header className={styles.header}>
                <h2><a> Freelancer</a></h2>
            
                {islogged ? <Navbar/> :  <UserLogged /> }
              
            </header>
        </div>
        
        
        </>


    );


}