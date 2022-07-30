

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
    
    const {user, setUser}: any= useContext(MyContext)

  

    console.log(user[0]);

    return(
        <>

    
        
        {user?.map((user: userDataSingle) =>(

             
        <S.Container>


        <section>

            <div>
                <img src={user.profileDatas.image || ""} alt="imagem profile" />                    
            </div>

            <div>
                <span>{user.name}</span>
                <span>Front-End</span>
            </div>
        </section>

        <section>

        <nav>

            <ul>

                <li><Link href="/FreelancerDashboard">Dashboard</Link></li>
                <li><Link href="/Oportunidades">Oportunidades</Link></li>
                <li><Link href="/Candidature">Canditaturas</Link></li>
                <li><Link href="/UpdateProfile"> Editar meu perfil </Link></li>

            </ul>

        </nav>

        </section>

        </S.Container>



        

        ))}
       
        
        </>
    )


}   