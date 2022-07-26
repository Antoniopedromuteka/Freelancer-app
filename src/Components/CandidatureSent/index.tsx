


import { type } from "os"
import { useContext, useEffect, useState } from "react"
import { database } from "../../../services/firebase"
import MyContext from "../../Context/MyContext"
import * as S from "./style"

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
        candidaturas: [],
    }
  
  }

  
type AdvertsProps = {
    key: string,
    companyName: string,
    title: string,
    typeMod: string,
    price: string,
    typeCompany: string,
    especiality1: string,
    especiality2: string,
    especiality3: string,
    especiality4: string

}


type InviteProps = {
    key: string,
    userKey: string,
    advert: AdvertsProps,
}

export default function CandidatureSent(){

    const {user, setUser}: any = useContext(MyContext);
    const {userDataS}:any = useContext(MyContext);

     const [invite, setInvite] = useState<InviteProps[]>([]);

     useEffect(()=>{

        const refUserDataSingle = database.ref('Candidaturas')
        refUserDataSingle.on('value', resultado =>{
    
    
     
            const resultadoUserDataSingle = Object.entries<InviteProps>(resultado.val() ?? {})
            .map(([key, valor]) =>{
              return{
                'key': key,
                 "userKey": valor.userKey,
                 "advert": valor.advert,
                
      
              }

            })
          
            setInvite(resultadoUserDataSingle);
          }) 
          
      
        }, []);


    return(
        <>


        {invite?.map((candidature:InviteProps)=>(
            <S.AdvertsMain>
                        
              
           
            <div className="block1">
                <h1>{candidature?.advert.title}</h1>

                <div className="blockContent">
                    <span>{candidature?.advert.companyName}</span>
                    <span>{candidature?.advert.typeMod}</span>
                    <span>{candidature?.advert.typeCompany}</span>
                    <span>{candidature?.advert.price}</span>
                </div>

                <div className="blockContent2">
                    <span>{candidature?.advert.especiality1}</span>
                    <span>{candidature?.advert.especiality2}</span>
                    <span>{candidature?.advert.especiality3}</span>
                    <span>{candidature?.advert.especiality4}</span>

                </div> 

            </div>

            <div className="block2">
                <button>Enviada</button>
            </div>

          
            
        </S.AdvertsMain>
        
        ))
       
    
        }
        </>

    )



}