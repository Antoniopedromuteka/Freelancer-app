

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import * as S from "..//styles/Freelancer";
import { Loader } from "../Components/Loader";
import { SidebarLeft } from "../Components/SidebarLeft";
import { UserLogged } from "../Components/UserLogged";
 
import MyContext from "../Context/MyContext";
import Login from "./Login";
 


interface userDataSingle{
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

export default function FreelancerDashboard(){

    
    const {userDataS} : any= useContext(MyContext);

    const {user, setUser}: any  = useContext(MyContext);



    
    if(!userDataS) return <Loader/>;
     
  
        


       
     

     

   
        




       
 




       
    return(

        
        <>
    
        
    
         
       


         {!user ? <Login/> : 


            user?.map((user : userDataSingle)  =>(

                <S.Container>
                            

                <SidebarLeft />

                <S.Main>

                <section>

                        <h2>Bem vindo (a), {user.name}  ao nosso sistema Freelancer</h2>


                </section>

                <section>

                    <div>

                        <h2>Oportunidaddes</h2>
                    
                    

                        <section>

                        <h2>10</h2>

                        <span>Ver</span>


                        </section>
                        

                    </div>


                    <div>
                
                        <h2>Candidaturas</h2>

                        
                        <section>

                            <h2>10</h2>

                            <span>Ver</span>

                        </section>


                    </div>
                </section>
                    

                </S.Main>




                </S.Container>
             
        
         




            ))
               


         }

    

    
                        
         
        
        </>
    
        

    );

}