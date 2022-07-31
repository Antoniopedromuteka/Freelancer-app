

import * as S  from "../styles/professionals"
import { Header } from "../Components/Header";
import { useContext } from "react";
import MyContext from "../Context/MyContext";
import Home from ".";

export default function Company(){

    const {userDataSCompany, setUserDataSCompany}: any = useContext(MyContext);
    const {islogged}: any = useContext(MyContext);

    return(

     <>

 

       

        <S.Container>

        <S.Top>
            <S.Title>Empresas</S.Title>

            <S.Subtitle>Empresas ligadas a nossa plataforma</S.Subtitle>   
        </S.Top>

        <S.ContainerCards>


        {userDataSCompany?.map((user:any)=>(

      
        <S.Card>

            <S.CardImage>
             <img src={user?.profileDatas?.image} alt="" />
            </S.CardImage>
            <S.CardBody>

          
            <S.CardBodyTiled>{user.name}</S.CardBodyTiled>

            <S.CardBodySubtitle>{user.profileDatas?.descriptionTitle}</S.CardBodySubtitle>
           

            </S.CardBody>
        
        
            </S.Card> 
            
            
            ))    
        }

       


        </S.ContainerCards>


        </S.Container>


         


     </>  

    );

}