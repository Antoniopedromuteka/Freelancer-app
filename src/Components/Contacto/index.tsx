 

 import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
 
import styles from './style.module.scss';

function ContactUs (){
    return(
        <section className={styles.container}>
                <div className={styles.content_left}>

                    <div className={styles.first}>

                        <section>
                            <h2>Localização</h2>

                            <span>
                                Luanda | Morro Bento
                            </span>
                        </section>

                    </div>

                    <div className={styles.second}>

                    <section>
                            <h2>Segue-nos</h2>

                        <div>
                            <span>
                                <BsFacebook className={styles.icons}/>
                                <BsTwitter className={styles.icons}/>
                                <BsInstagram className={styles.icons}/>
                                <BsLinkedin className={styles.icons}/>
                            </span>

                            <span>
                            ©2021 Privacy policy
                            </span>
                        </div>    
                        </section>



                    </div>

                </div>

                <div className={styles.content_right}>

                    
                    <section>
                        <h2>Contacte-nos</h2>
                    

                    <form action="">

                        <input type="text" name="" placeholder="Insira o seu nome" id="" />
                        <input type="text" name="" placeholder="Insira o seu e-mail" id="" />     

                        <textarea name="" placeholder="Escreva uma mensagem">

                        </textarea>


                        <button>
                            Enviar
                        </button>
                    
                    </form>   

                    </section>


                </div>
        </section>
    );
}
export default ContactUs;
