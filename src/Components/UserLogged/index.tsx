

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
                    <img src={user[0]?.profileDatas.image || ""} alt="profile image" />
                </div>
            </section>

        </S.Container>

        {isOpen ? <Menu/> : ""}
       
         

        
       </>
    );

}