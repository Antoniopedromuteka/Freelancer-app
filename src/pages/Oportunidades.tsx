
import Adverts from "../Components/Adverts"
import { SidebarLeft } from "../Components/SidebarLeft"
import * as S from "../styles/opportunities"



export default function Oportunidades(){    


    return(

        <>

            <S.Container>

                <SidebarLeft/>

                <main>

                    <section>
                        <h2>Melhores Oportunidades para você</h2>

                        <div>
                            <input type="text" placeholder="Pesquisar" />
                        </div>
                    </section>

                    <Adverts/>
                    <Adverts/>
                    <Adverts/>
                    <Adverts/>


                </main>


            </S.Container>

                    
        </>
    )


}