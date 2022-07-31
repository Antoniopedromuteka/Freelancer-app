


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



export default function CandidatureRecive(){

    const {user, setUser}: any = useContext(MyContext);
    const {userDataS}:any = useContext(MyContext);

     const [invite, setInvite] = useState<InviteProps[]>([]);

     const [info, setInfo] = useState<InviteProps>();

     const [newdata, setNewdata] = useState<userDataSingle[]>([])

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

     useEffect(()=>{

       // console.log(invite)

        const datas = invite.find((inv:InviteProps) =>{ return inv.advert.companyName === user[0]?.name;})

        console.log(datas+ "fofklfk")

        setInfo(datas);

        const data = userDataS.find((user:userDataSingle) => user.key === info?.userKey);

       

        setNewdata([...newdata, data])

        
        

      
      
     },[])

     console.log(newdata)


      
     
      
    return(
        <>


        {newdata?.map((candidature:userDataSingle)=>(
            <S.AdvertsMain>
                        
         
            <div className="block1">
                <h1>{candidature?.name}</h1>

                <div className="blockContent">
                    <span>{candidature?.email}</span>
                   
                </div>

       
            </div>

            <div className="block2">
            {candidature ? <button>Aceitar</button> : ""}
            {candidature ? <button>Recusar</button> : ""}
            

            </div>

           
          
            
        </S.AdvertsMain>
        
        ))
       
    
        }
        </>

    )



}