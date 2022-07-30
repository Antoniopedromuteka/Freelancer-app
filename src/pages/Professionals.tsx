

import * as S  from "../styles/professionals"
import { Header } from "../Components/Header";
import { useContext } from "react";
import MyContext from "../Context/MyContext";


type userDataSingle ={
    key: string,
    name: string,
    email: string,
    password: string,
    passwordconfirm: string,
    
    profileDatas:{
        image: string,
        price: number,
        descriptionTitle: string,
        descriptionExtra: string,
        location: string,
        profission: string,
        tel: number,
        linkSocialMedia: ArrayBuffer,
        about:  "",
        habilitys: ArrayBuffer,
    }
  
  }
  

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


        {userDataS.map((user:userDataSingle)=>(

      
        <S.Card>

            <S.CardImage>
             <img src={user.profileDatas.image} alt="" />
            </S.CardImage>
            <S.CardBody>

          
            <S.CardBodyTiled>{user.name}</S.CardBodyTiled>

            <S.CardBodySubtitle>{user.profileDatas.descriptionTitle}</S.CardBodySubtitle>
           

            </S.CardBody>
        
        
            </S.Card> 
            
            
            ))    
        }

       


        </S.ContainerCards>


        </S.Container>






     </>  

    );

}