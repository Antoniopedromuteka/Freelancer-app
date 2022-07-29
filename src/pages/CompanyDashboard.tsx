import { useContext } from "react";
import { Header } from "../Components/Header";
import { SidebarLeft } from "../Components/SidebarLeftCompany";
import MyContext from "../Context/MyContext";

import * as S from "../styles/companyDashboard";



export default function CompanyDashboard(){

        const {user}:any = useContext(MyContext);

        console.log(user)

    return(

        
        <>

            <Header/>

            <S.Container>
                <SidebarLeft/>


                <S.Home>
                <section>


                    <h2>Bem vindo (a),  D-line  ao nosso sistema Freelancer</h2>


                    </section>

                    <section>

                    <div>

                    <h2>Anúncios</h2>



                    <section>

                    <h2>10</h2>

                    <span>Ver</span>


                    </section>


                    </div>


                    <div>

                    <h2>Candidaturas Recebidas</h2>


                    <section>

                        <h2>10</h2>

                        <span>Ver</span>

                    </section>


                    </div>
                </section>

                </S.Home>

                

            </S.Container>
         

        
        </>


    );

}