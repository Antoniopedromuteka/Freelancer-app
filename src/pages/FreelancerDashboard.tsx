

import * as S from "..//styles/Freelancer";
import { SidebarLeft } from "../Components/SidebarLeft";


export default function FreelancerDashboard(){

    return(

        <S.Container>
            
            <SidebarLeft/>

            <S.Main>

             <section>

                    <h2>Bem vindo (a), Antonio ao nosso sistema Freelancer</h2>


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