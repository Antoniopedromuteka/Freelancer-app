import { FormEvent, useContext, useEffect, useState } from "react";
import { database } from "../../services/firebase";
import { Header } from "../Components/Header";
import { SidebarLeft } from "../Components/SidebarLeftCompany";
import MyContext from "../Context/MyContext";


import * as S from "../styles/publications"


export default function Publications(){

    const [title, setTitle] = useState("");
    const [typeMod, setTypeMod] = useState("");
    const [price, setPrice] = useState("");
    const [typeCompany, setTypeCompany] = useState("");
    const [especiality1, setEspeciality1] = useState("");
    const [especiality2, setEspeciality2] = useState("");
    const [especiality3, setEspeciality3] = useState("");
    const [especiality4, setEspeciality4] = useState("");
    const [companyName, setCompanyName] = useState("");


    const {user}:any = useContext(MyContext);

    

    useEffect(()=>(
       
        setCompanyName(user[0]?.name)

    ), [])
    


    function handlePost(event: FormEvent){

        event.preventDefault();

        const ref = database.ref('publicacoes');

        const datas ={
            companyName,
            title,
            typeMod,
            price,
            typeCompany,
            especiality1,
            especiality2,
            especiality3,
            especiality4
        }


        ref.push(datas);

        setCompanyName("");
        setTitle("");
        setTypeMod("");
        setEspeciality1("");
        setEspeciality2("");
        setEspeciality3("");
        setEspeciality4("");
        setPrice("");
    


    }

    return(
        <>

            <Header/>

            <S.Container>
                
                <SidebarLeft/>

                <S.Adverts>

                  
                        <h2>
                            Anuncie uma vaga
                        </h2>
                  
                    <form onSubmit={handlePost}>

                        <input type="text" placeholder="Titulo da vaga" value={title} onChange={(event)=> setTitle(event.target.value)} />

                        <input type="text" placeholder="Tipo de vaga" value={typeMod} onChange={(event)=> setTypeMod(event.target.value)} />
                        

                        <input type="text" placeholder="Taxa horária" value={price} onChange={(event)=> setPrice(event.target.value)} />
                        <input type="text" placeholder="Tipo de Empresa" value={typeCompany} onChange={(event)=> setTypeCompany(event.target.value)} />


                        <input type="text" placeholder="Especialidade 1" value={especiality1} onChange={(event)=> setEspeciality1(event.target.value)} />
                        <input type="text" placeholder="Especialidade 2" value={especiality2} onChange={(event)=> setEspeciality2(event.target.value)} />
                        <input type="text" placeholder="Especialidade 3" value={especiality3} onChange={(event)=> setEspeciality3(event.target.value)} />
                        <input type="text" placeholder="Especialidade 4" value={especiality4} onChange={(event)=> setEspeciality4(event.target.value)}/>



                        <button type="submit">Postar</button>


                        





                        

                    </form>

                </S.Adverts>


        
            </S.Container>
        </>
    )

}