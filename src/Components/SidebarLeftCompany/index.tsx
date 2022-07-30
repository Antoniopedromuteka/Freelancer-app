

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
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFTFZYaARW3tg/profile-displayphoto-shrink_800_800/0/1648850570320?e=1664409600&v=beta&t=lVIIXx0ROFp85sHgG0mfkGLshcAed7JzwoL_27lcYUQ" alt="imagem profile" />                    
            </div>

            <div>
                <span>D-line code</span>
                <span>Front-End</span>
            </div>
        </section>

        <section>

        <nav>

            <ul>

                <li><Link href="/CompanyDashboard">Dashboard</Link></li>
                <li><Link href="/Publications">Anunciar</Link></li>
                <li><Link href="/Candidature">Canditaturas Recebidas</Link></li>
                <li><Link href="/UpdateProfile"> Editar perfil </Link></li>

            </ul>

        </nav>

        </section>

        </S.Container>



        

        
       
        
        </>
    )


}   