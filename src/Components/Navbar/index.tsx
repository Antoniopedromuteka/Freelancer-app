import Link from "next/link";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";


import styles from "./styles.module.scss"

 
export function Navbar(){


    const {setIslogged}: any = useContext(MyContext);
    


    return(
        <>
            <nav className={styles.nav_container}>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/Contacto"><a>Sobre</a></Link></li>
                        <li><Link href="/Posts"><a>Post</a></Link></li>

                        <li><Link href="/Professionals"><a >Profissionais</a></Link></li>
                        <li><Link href="/Empresas"><a >Empresas</a></Link></li>

                    </ul>
                    <div className={styles.button}>
                      <button onClick={()=> setIslogged(false)}><Link href="/Login">Login</Link></button>
                      <button><Link href='/Login'>Cadastrar</Link></button>
                     
                    </div>
                </nav>
        </>
    );


}