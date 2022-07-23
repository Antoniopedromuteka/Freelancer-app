import { useContext, useState } from "react";
import { LoginCompany } from "../Components/LoginCompany";
import { LoginSingle } from "../Components/LoginSingle";
import MyContext, { loginContext } from "../Context/MyContext";

import * as S from "../styles/Login"


export default function Login(){

    const {typeLogin, setTypeLogin}: any= useContext(MyContext);

    return(
        <>
        <loginContext.Provider value={{typeLogin, setTypeLogin}}>
        <S.Container>
            
             {typeLogin && <LoginSingle/>}
             {!typeLogin && <LoginCompany/>}
 
        </S.Container>
        </loginContext.Provider>
        </>
    );

}