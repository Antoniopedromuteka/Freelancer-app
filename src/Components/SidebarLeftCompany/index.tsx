

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/MyContext';
import * as S from './style';




interface userDataSingle {
    key: string,
    name: string,
    email: string,
    password: string,
    passwordconfirm: string,
    
    profileDatas:{
        image: string,
        price: number,
        descriptionTitle: string,
        descriptionExtra: string,
        location: string,
        profission: string,
        tel: number,
        linkSocialMedia: ArrayBuffer,
        about:  "",
        habilitys: ArrayBuffer,
    }

}


export function SidebarLeft(){

    const {userDataS} : any= useContext(MyContext);
    
    const {user, setUser}: any= useContext(MyContext);


    

  



    return(
        <>

    
        
        
             
        <S.Container>


        <section>

            <div>
                <img src={user[0]?.profileDatas?.image} alt="imagem profile" />                    
            </div>

            <div>
                <span>{user[0]?.profileDatas?.companyName}</span>
                <span>{user[0]?.profileDatas?.descriptionTitle}</span>
            </div>
        </section>

        <section>

        <nav>

            <ul>

                <li><Link href="/CompanyDashboard">Dashboard</Link></li>
                <li><Link href="/Publications">Anunciar</Link></li>
                <li><Link href="/ReciveCandidature">Canditaturas Recebidas</Link></li>
                <li><Link href="/UpdateProfileCompany"> Editar perfil </Link></li>

            </ul>

        </nav>

        </section>

        </S.Container>



        

        
       
        
        </>
    )


}   