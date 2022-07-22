import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
  
  </>  

  )
}

export default MyApp
