

import * as S  from "../styles/professionals"
import { Header } from "../Components/Header";
import { useContext } from "react";
import MyContext from "../Context/MyContext";

export default function Professionals(){

    const {userDataS, setUserDataS}: any = useContext(MyContext);

    return(
     <>

       

        <S.Container>

        <S.Top>
            <S.Title>Profissionais</S.Title>

            <S.Subtitle>Profissionais que temos na nossa plataforma</S.Subtitle>   
        </S.Top>

        <S.ContainerCards>


        {userDataS.map((user:any)=>(

      
        <S.Card>

            <S.CardImage>
             <img src="https://img.freepik.com/free-photo/horizontal-shot-pretty-dark-skinned-woman-with-afro-hairstyle-has-broad-smile-white-teeth-shows-something-nice-friend-points-upper-right-corner-stands-against-wall_273609-16442.jpg?t=st=1658512115~exp=1658512715~hmac=b4bebcc5fa39b87838e62ea6ae77ec78e3a6a465205ec5145b9726de47969ee7&w=1060" alt="" />
            </S.CardImage>
            <S.CardBody>

          
            <S.CardBodyTiled>{user.name}</S.CardBodyTiled>

            <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>
           

            </S.CardBody>
        
        
            </S.Card> 
            
            
            ))    
        }

       


        </S.ContainerCards>


        </S.Container>






     </>  

    );

}