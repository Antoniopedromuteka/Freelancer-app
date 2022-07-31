import { useContext } from "react";
import Home from ".";
import CandidatureRecive from "../Components/CandidatureRecive";
import { Header } from "../Components/Header";
import { SidebarLeft } from "../Components/SidebarLeftCompany";
import MyContext from "../Context/MyContext";




import * as S from "../styles/recive";








export default function ReciveCandidature(){
    const {islogged}: any = useContext(MyContext);

    return(
      
            <>
    
            {islogged ? 
    
            <S.Container>
    
                <SidebarLeft/>
    
                <main>
    
                    <div className="sessao">
    
                       <h2>
    
                            Candidaturas Recebidas
    
                       </h2>
    
                    </div>
    
    
                     <CandidatureRecive/>
                   
    
    
    
    
    
                </main>
    
            </S.Container>
                : <Home/>}
            
            </>
    );

}