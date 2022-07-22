import { useContext, useState } from "react";
import MyContext from "../../Context/MyContext";


import * as S from "./style"




 

export function LoginSingle(){

    

    const [isLogin, setIsLogin] = useState<boolean>(true);


    const {user, setUser}: any = useContext(MyContext);

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
                <form>

                    <input type="email" value={user.name} placeholder="Insira o seu email"/>
                    <input type="password" value={user.email} placeholder="Insira a sua password"/>

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