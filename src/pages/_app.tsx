import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import MyContext from '../Context/MyContext';
import { useState, useEffect } from 'react';
import {database} from '../../services/firebase';
import { Loader } from '../Components/Loader';


type userDataSingle ={
  key: string,
  name: string,
  email: string,
  password: string,
  passwordconfirm: string,
  
  profileDatas:{
      image: string,
      price: number,
      descriptionTitle: string,
      descriptionExtra: string,
      location: string,
      profission: string,
      tel: number,
      linkSocialMedia: ArrayBuffer,
      about:  "",
      habilitys: ArrayBuffer,
  }

}


 

function MyApp({ Component, pageProps }: AppProps) {


  const [userDataS, setUserDataS] = useState<userDataSingle[]>();
  const [userDataSCompany, setUserDataSCompany] = useState<userDataSingle[]>();
  
  const [islogged, setIslogged] = useState(false);

  const [user, setUser] = useState<userDataSingle>();

  
  

  const [typeLogin, setTypeLogin] = useState<Boolean>(true)

  useEffect(()=>{

    const refUserDataSingle = database.ref('freelancer')
    refUserDataSingle.on('value', resultado =>{


 
        const resultadoUserDataSingle = Object.entries<userDataSingle>(resultado.val() ?? {})
        .map(([key, valor]) =>{
          return{
            'key': key,
            'name': valor.name,
            'email': valor.email,
            'password': valor.password,
            'passwordconfirm': valor.passwordconfirm,
            
            'profileDatas':{
                'image': valor.profileDatas?.image,
                'price': valor.profileDatas?.price,
                'descriptionTitle': valor.profileDatas?.descriptionTitle,
                'descriptionExtra': valor.profileDatas?.descriptionExtra,
                'location': valor.profileDatas?.location,
                'profission': valor.profileDatas?.profission,
                'tel': valor.profileDatas?.tel,
                'linkSocialMedia': valor.profileDatas?.linkSocialMedia,
                'about':  valor.profileDatas?.about,
                'habilitys': valor.profileDatas?.habilitys,
                
            }
          
  
          }
        })
  
        setUserDataS(resultadoUserDataSingle)
      
        
      }) 
  
    }, []);

    useEffect(()=>{

      const refUserDataCompany = database.ref('Empresa')
      refUserDataCompany.on('value', resultado =>{
  
  
   
          const resultadoUserDataCompany = Object.entries<userDataSingle>(resultado.val() ?? {})
          .map(([key, valor]) =>{
            return{
              'key': key,
              'name': valor.name,
              'email': valor.email,
              'password': valor.password,
              'passwordconfirm': valor.passwordconfirm,
              
              'profileDatas':{
                  'image': valor.profileDatas.image,
                  'price': valor.profileDatas.price,
                  'descriptionTitle': valor.profileDatas.descriptionTitle,
                  'descriptionExtra': valor.profileDatas.descriptionExtra,
                  'location': valor.profileDatas.location,
                  'profission': valor.profileDatas.profission,
                  'tel': valor.profileDatas.tel,
                  'linkSocialMedia': valor.profileDatas.linkSocialMedia,
                  'about':  valor.profileDatas.about,
                  'habilitys': valor.profileDatas.habilitys,
                  
              }
            
    
            }
          })

           
          setUserDataSCompany(resultadoUserDataCompany);

          
        }) 
    
      }, []);
      if(!userDataS) return <Loader/>;

   
      console.log(userDataSCompany);
      console.log(userDataS);
  //const [user, setUser] = useState<userProps>({name: 'user', email: 'user@example.com'});

  return (
  <>
  <MyContext.Provider value={{userDataS, setUserDataS, user, setUser, typeLogin, setTypeLogin, userDataSCompany, setUserDataSCompany, islogged, setIslogged}}>
    <Header/>
    <Component {...pageProps} />
  </MyContext.Provider>
  </> 

  )
}

export default MyApp
