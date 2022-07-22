


import styles from './styles.module.scss'




export function Header(){

    return(

        <>

        <div>
            <header className={styles.header}>
                <h2><a> Freelancer</a></h2>
            
                <nav className={styles.nav_container}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#Sobre">Sobre</a></li>
                        <li><a href="#">Post</a></li>

                        <li><a href="#Frel">Profissionais</a></li>
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