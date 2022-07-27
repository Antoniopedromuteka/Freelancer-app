

import { useContext } from "react";
import * as S from "..//styles/Freelancer";
import { SidebarLeft } from "../Components/SidebarLeft";
 
import MyContext from "../Context/MyContext";
 


type userDataSingle ={

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

    const {userLogged}: any= useContext(MyContext);
    const {userDataS} : any= useContext(MyContext);

    
    console.log(userLogged);

    console.log(userLogged);
   
    return(

    

        
        <S.Container>
            
            <SidebarLeft/>

            <S.Main>

             <section>

                    <h2>Bem vindo (a), ao nosso sistema Freelancer</h2>


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


    
        

    );

}