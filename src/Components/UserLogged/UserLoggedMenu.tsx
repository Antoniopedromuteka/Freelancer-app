

import Link from "next/link";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import * as S from "./styles";


export function Menu(){


    const {setIslogged}: any = useContext(MyContext);

    return (
        <>

        <S.ContainerMenu>

            <nav>
                <ul>
                <li><Link href="/">Dashboard</Link></li>
                <li><Link href="/Posts">Oportunidades</Link></li>
                <li><Link href="/Candidatura">Candidaturas</Link></li>
                <li><Link href="/UpdateProfile">Editar meu perfil</Link></li>
                <li onClick={() => setIslogged(true)}><Link href="/Login">Sair</Link></li>
                </ul>
            </nav>

        </S.ContainerMenu>
        

        </>
    )

}