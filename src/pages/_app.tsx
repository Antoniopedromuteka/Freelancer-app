import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import MyContext from '../Context/MyContext';
import { useState } from 'react';
 
interface userProps{
  name: string,
    email: string,
}

function MyApp({ Component, pageProps }: AppProps) {

  const logged = true;
  const [user, setUser] = useState<userProps>({name: 'user', email: 'user@example.com'});
  return (
  <>
  <MyContext.Provider value={{user, setUser}}>
    { logged ? <Header/> : ""}
    <Component {...pageProps} />
  </MyContext.Provider>
  </>  

  )
}

export default MyApp
