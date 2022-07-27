import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../Components/Banner'
import styles from '../styles/Home.module.scss'

import {Card} from '../Components/Card/index'
import {ItemsData} from './mockItemsData';
import { Subscribe } from '../Components/Subscribe/index'
import ContactUs from '../Components/Contacto'
import { Footer } from '../Components/Footer'
 

 

 
 
 
const Home: NextPage = () => {
  return (
     <>

      <Head>
        <title>Home | freelancer</title>
      </Head>
      <main className={styles.container}>

       <Banner/>

       <div className={styles.Subtitle_home} id="Sobre">
            <h2>Sobre nós</h2>
            <p>Freelancer, um benefício para todos</p>
        </div>

        <div className={styles.desc_sobr}>
            <div>
                   <Image src="/images/blog_2.jpg" alt="sem descricao" layout="fill"/>
            </div>
            <div>
                <p>O Freelancer são pessoas que prestam serviços de forma individual.
                         é um site onde irá ajudar você que tem uma habilidade  e
                          quer mostrar para o mundo e assim conseguir o seu
                        emprego diário, sem desprimor a ninguém o site precisará apenas de 2 vídeos
                        para comprovar o quão habilidoso és e com isso irás seguir algumas recomendações.
                        Claro! Vai já fazer o login.
                </p>
            </div>
        </div>
        <div className={styles.desc_sobr}>
            <div>
                <p>O Freelancer são pessoas que prestam serviços de forma individual.
                         é um site onde irá ajudar você que tem uma habilidade  e
                          quer mostrar para o mundo e assim conseguir o seu
                        emprego diário, sem desprimor a ninguém o site precisará apenas de 2 vídeos
                        para comprovar o quão habilidoso és e com isso irás seguir algumas recomendações.
                        Claro! Vai já fazer o login.</p>
            </div>
            <div>

            <Image src="/images/foto1.jpg" alt="sem descricao" layout="fill"/>
            
               
            </div>
        </div> 


        <div className={styles.Subtitle_home} id="Frel">
            <h2>Áreas</h2>
            <p>Freelancer, conheça as nossas áreas</p>
        </div>



                
                <div className={styles.areas_container}>
                    
                
                    
                        {
                            
                        ItemsData.map((item)=>{
                            return ( 
                              
                                 
                                    
                                
                                    <Card {...item} />
 
                                
       
                            );  
                            
                      
                        })    
                        }
     
               
                 
                </div>

                
  

                
                <Subscribe/>


                <div className={styles.Subtitle_home}>
                    <h2>Nossos parceiros</h2>
                    <p>Freelancer, um benefício para todos</p>
                </div>
                <div className={styles.Parceiros}>
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.vhHZXtLUkvyj9OLebIyrtgAAAA?pid=ImgDet&rs=1" alt="banco bai" />
                        <img src="https://th.bing.com/th/id/OIP.0Oz4ZhVjXCR5a5xxtuwroQHaHa?pid=ImgDet&rs=1" alt="taag" />
                        <img src="https://customercarecontacts.com/wp-content/uploads/2021/05/wise-logo.jpg" alt="wise"/>
                        <img src="https://th.bing.com/th/id/R.bd9ca37ef8a39788313423bf6d78266a?rik=DqQ3c1xMqcQH%2bQ&riu=http%3a%2f%2fwww.oilgasafrica.com%2fsites%2fdefault%2ffiles%2ffield%2fimage%2fsonangol.jpg&ehk=3ULfqDlyfc41H%2fPbtALpXdPWDnpMDckAWmwaQIMSX1I%3d&risl=&pid=ImgRaw&r=0" alt="sonangol"/>
                    </div>
                </div> 

            <ContactUs/>



            <Footer/>              
      </main>

            
           
     </>
  )
}

export default Home
