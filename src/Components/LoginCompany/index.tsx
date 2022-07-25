import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { database } from "../../../services/firebase";
import MyContext from "../../Context/MyContext";
 


import * as S from "./style"




 

export function LoginCompany(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");
    const [key, setKey] = useState("");


    

    const [isLogin, setIsLogin] = useState<boolean>(true);


    const {typeLogin, setTypeLogin}:any = useContext(MyContext);

    function limpa(){
        setName('');
        setEmail('');
        setPassword('');
        setPasswordconfirm('');
      }
    

    function SingUpCompany(event: FormEvent){

        event.preventDefault();

        const ref = database.ref('Empresa');

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


        ref.push(datas)




        limpa();

    }



    return (
        <>
  
        <S.Container >

            <h2>Login como Empresa</h2>

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
                <form>

                    <input type="email" placeholder="Insira o seu email"/>
                    <input type="password" placeholder="Insira a sua password"/>

                    <button>
                        Enviar
                    </button>


                  <span onClick={()=> setTypeLogin(true)}><Link href="/Login">login como candidato</Link></span>



                </form>
             }
             
             {!isLogin &&
                <form onSubmit={SingUpCompany}>
            
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