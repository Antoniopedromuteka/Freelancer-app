

import Link from "next/link";
import { useContext, useState } from "react";
import MyContext from "../../Context/MyContext";
import * as S from "./styles"
import { Menu } from "./UserLoggedMenu";




export function UserLogged(){


    const [isOpen, setIsOpen] = useState(false);
    const {user, setUser}: any= useContext(MyContext);

    
    function handleOpenMenu(){

        !isOpen ? setIsOpen(true) : setIsOpen(false); 
         
       
    }

     

    return(
       <>

        
        <S.Container>

            <section>
                <Link href="/">
                   Mostar Vagas 
                </Link>
            </section>

            <section onClick={handleOpenMenu}>
                <span>
                    {user[0].name}
                </span>

                <div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFTFZYaARW3tg/profile-displayphoto-shrink_800_800/0/1648850570320?e=1664409600&v=beta&t=lVIIXx0ROFp85sHgG0mfkGLshcAed7JzwoL_27lcYUQ" alt="profile image" />
                </div>
            </section>

        </S.Container>

        {isOpen ? <Menu/> : ""}
       
         

        
       </>
    );

}