


import { FormEvent, useContext, useEffect, useState } from "react";
import { database } from "../../../services/firebase";
import MyContext from "../../Context/MyContext";
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

    const [invite, setInvite] = useState<AdvertsProps[]>([]);

    const [isSearch, setIsSearch] = useState(false);

    const [search, setSearch] = useState<AdvertsProps[]>([]);

    const {user}:any = useContext(MyContext);

    


    function handleSearch(event:FormEvent){

        console.log(event.target.value);

        const wordSearch = event.target.value;

        if(wordSearch.length < 0 ){ setIsSearch(false); return};

        setIsSearch(true);

        const data = new Array();

        advertsData?.map((advert:AdvertsProps) =>{

            const rule = new RegExp(event.target.value, "gi");
            
            if(rule.test(advert.title) || rule.test(advert.companyName)){
                data.push(advert);
            }

            setSearch(data);
        })


    }

    function handleSubscribe(advert:AdvertsProps){

        console.log(advert);



        if(!advert) return;

          
        setInvite([...invite, advert]);
       

        const ref = database.ref("Candidaturas")
      
        
        if(!user[0]) return;

       const userKey = user[0]?.key;

               console.log(advert);

        const data ={

                userKey, 
                advert, 
           
        }

       
        ref.push(data)

    


    } 
    
    useEffect(()=>{

        const refAdverts = database.ref('publicacoes')
        refAdverts.on('value', resultado =>{
    
    
     
            const resultAdverts = Object.entries<AdvertsProps>(resultado.val() ?? {})
            .map(([key, valor]) =>{
              return{
                "key" : key,
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


            <section>
                        <h2>Melhores Oportunidades para você</h2>

                        <div>
                            <input type="text" placeholder="Pesquisar" onChange={(e)=>handleSearch(e)}/>
                        </div>
           </section>

        {!isSearch ? advertsData?.map((advert:AdvertsProps)=>(

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
                <button onClick={() => handleSubscribe(advert)}>Candidatar-se</button>
                <button>Recusar</button>

            </div>

      
        </S.AdvertsMain>
         ))

        : 

        search?.map((advert:AdvertsProps)=>(

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
                    <button onClick={() => handleSubscribe(advert)}>Candidatar-se</button>
                    <button>Recusar</button>
    
                </div>
    
          
            </S.AdvertsMain>
             ))
    

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }
        </>

    )



}