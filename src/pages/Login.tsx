import router from "next/router";
import { useContext, useState } from "react";
import Home from ".";
import { LoginCompany } from "../Components/LoginCompany";
import { LoginSingle } from "../Components/LoginSingle";
import MyContext  from "../Context/MyContext";

import * as S from "../styles/Login"
import FreelancerDashboard from "./FreelancerDashboard";




export default function Login(){

    const {typeLogin, setTypeLogin}: any= useContext(MyContext);

    const {islogged}: any  = useContext(MyContext);

    
    
    return(
        <>
        
        <S.Container>

            {
            
             typeLogin ? <LoginSingle/> : <LoginCompany/> }
        </S.Container>
     
        </>
    );

}