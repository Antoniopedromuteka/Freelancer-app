import { useContext, useState } from "react";
import { LoginCompany } from "../Components/LoginCompany";
import { LoginSingle } from "../Components/LoginSingle";
import MyContext  from "../Context/MyContext";

import * as S from "../styles/Login"


export default function Login(){

    const {typeLogin, setTypeLogin}: any= useContext(MyContext);

    return(
        <>
        
        <S.Container>
            
             {typeLogin && <LoginSingle/>}
             {!typeLogin && <LoginCompany/>}
 
        </S.Container>
     
        </>
    );

}