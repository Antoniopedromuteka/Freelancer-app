


import { useContext } from "react";
import Home from ".";
import Adverts from "../Components/Adverts";
import CandidatureSent from "../Components/CandidatureSent";
 
import { SidebarLeft } from "../Components/SidebarLeft";
import MyContext from "../Context/MyContext";
import * as S from "../styles/candidature"





export default function Candidature(){

    const {islogged}: any = useContext(MyContext);

    return(

        <>

        {islogged ? 

        <S.Container>

            <SidebarLeft/>

            <main>

                <div className="sessao">

                   <h2>

                        Candidaturas Enviadas

                   </h2>

                </div>


                 <CandidatureSent/>
               





            </main>

        </S.Container>
            : <Home/>}
        
        </>

    );

}