
import { useEffect, useState } from "react"
import { database } from "../../services/firebase"
import Adverts from "../Components/Adverts"
import { SidebarLeft } from "../Components/SidebarLeft"
import * as S from "../styles/opportunities"


type AdvertsProps = {
    key: string,
    title: string,
    typeMod: string,
    price: string,
    typeCompany: string,
    especiality1: string,
    especiality2: string,
    especiality3: string,
    especiality4: string

}

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
        

                </main>


            </S.Container>

                    
        </>
    )


}