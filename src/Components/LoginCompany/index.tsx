import { useState } from "react";


import * as S from "./style"




 

export function LoginCompany(){

    

    const [isLogin, setIsLogin] = useState<boolean>(true);




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


                </form>
             }
             
             {!isLogin &&
                <form>
            
                    <input type="email" placeholder="Insira o seu email"/>
                    <input type="password" placeholder="Insira a sua password"/>
                    <input type="password" placeholder="confirme sua password"/> 
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