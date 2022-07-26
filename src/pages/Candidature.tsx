


import Adverts from "../Components/Adverts";
import CandidatureSent from "../Components/CandidatureSent";
 
import { SidebarLeft } from "../Components/SidebarLeft";
import * as S from "../styles/candidature"





export default function Candidature(){

    return(

        <>

        <S.Container>

            <SidebarLeft/>

            <main>

                <div className="sessao">

                   <h2>

                        Candidaturas Enviadas

                   </h2>

                </div>


                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>
                 <CandidatureSent/>





            </main>

        </S.Container>
        
        
        </>

    );

}