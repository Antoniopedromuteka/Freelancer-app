import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Banner } from './src/Components/Banner'

const Home: NextPage = () => {
  return (
     <>

      <Head>
        <title>Home | freelancer</title>
      </Head>
      <main className={styles.container}>

       <Banner/>

       <div className="Subtitle-home" id="Sobre">
            <h2>Sobre nós</h2>
            <p>Freelancer, um benefício para todos</p>
        </div>



      </main>

           
     </>
  )
}

export default Home
