

import Link from 'next/link';
import * as S from './style';

export function SidebarLeft(){


    return(
        <>
        <S.Container>
            

            <section>

                <div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFTFZYaARW3tg/profile-displayphoto-shrink_800_800/0/1648850570320?e=1664409600&v=beta&t=lVIIXx0ROFp85sHgG0mfkGLshcAed7JzwoL_27lcYUQ" alt="imagem profile" />                    
                </div>

                <div>
                    <span>António</span>
                    <span>Front-End</span>
                </div>
            </section>

             <section>

               <nav>

                <ul>

                    <li>Dashboard</li>
                    <li>Oportunidades</li>
                    <li>Canditaturas</li>
                    <li>Editar meu perfil</li>

                </ul>

               </nav>

             </section>

        </S.Container>
        
        </>
    )


}   