


import { useEffect, useState } from "react";
import { database } from "../../../services/firebase";
import * as S from "./style"


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


export default function Adverts(){

    
    const [advertsData, setAdvertsData] = useState<AdvertsProps[]>([]);



    
    useEffect(()=>{

        const refAdverts = database.ref('publicacoes')
        refAdverts.on('value', resultado =>{
    
    
     
            const resultAdverts = Object.entries<AdvertsProps>(resultado.val() ?? {})
            .map(([key, valor]) =>{
              return{
                "key" : valor.key,
                "companyName": valor.companyName,
                "title" : valor.title,
                "typeMod" : valor.typeMod,
                "price": valor.price,
                "typeCompany": valor.typeCompany,
                "especiality1": valor.especiality1,
                "especiality2": valor.especiality2,
                "especiality3": valor.especiality3,
                "especiality4": valor.especiality4 
      
              }
            })

            setAdvertsData(resultAdverts);
      
           
        }) 



         

    }, [])

    return(
        <>

        {advertsData?.map((advert:AdvertsProps)=>(

        <S.AdvertsMain>
            
            
            
            
            <div className="block1">
                <h1>{advert.title}</h1>

                <div className="blockContent">
                    <span> Empresa: {advert.companyName} /</span>
                    <span> Tipo de vaga: {advert.typeMod} /</span>
                    <span> Tipo de Empresa: {advert.typeCompany} /</span>
                    <span> Taxa horária: {advert.price} AOA </span>
                    
                </div>

                <div className="blockContent2">
                    <span>{advert.especiality1}</span>
                    <span>{advert.especiality2}</span>
                    <span>{advert.especiality3}</span>
                    <span>{advert.especiality4}</span>

                </div> 

            </div>

            <div className="block2">
                <button>Candidatar-se</button>
                <button>Recusar</button>

            </div>

      
        </S.AdvertsMain>
         ))

        }
        </>

    )



}