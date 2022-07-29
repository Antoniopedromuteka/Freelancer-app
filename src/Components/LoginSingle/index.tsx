import Link from "next/link";
import Router from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { database } from "../../../services/firebase";
import MyContext  from "../../Context/MyContext";
import Home from "../../pages";
 


import * as S from "./style"


type userDataSingle ={

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



 

export function LoginSingle(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");
    const [key, setKey] = useState("");

    
    const [isLogin, setIsLogin] = useState<boolean>(true);


    const {userDataS, setUserDataS} : any= useContext(MyContext);


    const {user, setUser}: any= useContext(MyContext);
  
   

    const {typeLogin, setTypeLogin}:any = useContext(MyContext);

    


    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    
    const {setIslogged, islogged}: any= useContext(MyContext);


 

    function limpa(){
        setName('');
        setEmail('');
        setPassword('');
        setPasswordconfirm('');
      }
    

    function SingUpSingle(event: FormEvent){

        event.preventDefault();

        const ref = database.ref('freelancer');

        const datas = {
            name,
            email,
            password,
            passwordconfirm,
            
            profileDatas:{
                image: "",
                price:0,
                profission:"",
                descriptionTitle: "",
                descriptionExtra: "",
                location: "",
                tel:"",
                linkSocialMedia: [],
                about:  "",
                habilitys: [],
            }
        }


        ref.push(datas);




        limpa();

    }


    async function handleLogin(event: FormEvent){


        event.preventDefault();


        const userS = await userDataS?.filter((user:userDataSingle) => (user.email === emailLogin && user.password === passwordLogin));
        
        console.log(userS);
      

        if(userS?.length > 0){


             setUser(userS)

             setIslogged(true);
             

            Router.push("/FreelancerDashboard");


        }

       
      
        

    }
    


    if(islogged) return <Home/>
 


    return (
        <>



        
  
        <S.Container>

            <h2>Login como Candidato</h2>

            <main>

                <div>
                    <button onClick={()=> setIsLogin(true)}>
                        Login
                    </button>
                    <button onClick={()=> setIsLogin(false)}>
                        Cadastre-se
                    </button>

                </div>
            { isLogin &&
                <form onSubmit={handleLogin}> 

                    <input type="email"   placeholder="Insira o seu email" value={emailLogin} onChange={(event) => setEmailLogin(event.target.value)}/>
                    <input type="password"   placeholder="Insira a sua password" value={passwordLogin} onChange={(event) => setPasswordLogin(event.target.value)}/>

                    <button type="submit">
                        Enviar
                    </button>


                  <span onClick={()=> setTypeLogin(false)}><Link  href="/Login">login como empresa</Link></span>

                </form>
             }
             
             {!isLogin &&
                <form onSubmit={SingUpSingle}>


                    <input type="text" placeholder=" Insira o seu Nome" value={name} onChange={(event)=> setName(event.target.value)} />
                    <input type="email" placeholder=" Insira o seu email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                    <input type="password" placeholder="Insira a sua password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                    <input type="password" placeholder="confirme sua password" value={passwordconfirm} onChange={(event) => setPasswordconfirm(event.target.value)}/> 
                    <button>
                        Cadastrar
                    </button>


                </form>
              }
           

            
            </main>

        </S.Container>


  
        
        
         </>
    );

}