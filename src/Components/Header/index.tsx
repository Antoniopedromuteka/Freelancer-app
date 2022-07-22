


import styles from './styles.module.scss'

import Link from 'next/link';




export function Header(){

    return(

        <>

        <div>
            <header className={styles.header}>
                <h2><a> Freelancer</a></h2>
            
                <nav className={styles.nav_container}>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/Contacto"><a>Sobre</a></Link></li>
                        <li><Link href="/Posts"><a>Post</a></Link></li>

                        <li><Link href="/Professionals"><a >Profissionais</a></Link></li>
                    </ul>
                    <div className={styles.button}>
                      <button> Login</button>
                      <button>Cadastrar</button>
                     
                    </div>
                </nav>
            </header>
        </div>
        
        
        </>


    );


}