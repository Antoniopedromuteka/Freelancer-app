import { FormEvent, useContext, useEffect, useState } from "react";
import { database } from "../../services/firebase";
import { Header } from "../Components/Header";
import { SidebarLeft } from "../Components/SidebarLeft";
import MyContext from "../Context/MyContext";



import * as S from "../styles/updateprofile";


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
  

export default function UpdateProfile(){

    const {user, setUser}:any = useContext(MyContext);


    const [key, setKey] = useState("");

    useEffect(()=>{

        user?.map((users:userDataSingle)=>{

            return setKey(users.key);
        
        })

    }, [])
    

    console.log(key);

     
    const [newname, setNewname] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [local, setLocal] = useState("");
    const [price, setPrice] = useState("");
    const [tel, setTel] = useState("")
    const[image, setImage] = useState("");
    

    const [about, setAbout] = useState("");


    function handleUpdate(event:FormEvent){

        event.preventDefault();
        const ref = database.ref("freelancer/");

        const datas = {
            "name" : newname,
            
            
            "profileDatas":{
                "about" : about,
                "descriptionTitle" : title,
                "descriptionExtra" : description,
                "price" : price,
                "location" : local,
                "tel": tel,
            }
           
        }

        ref.child(key).update(datas);



    }

/*
    function atualizarContato(){
        const ref = database.ref("contatos/");
    
        const dados = {
           'nome' : nome,
           'email' : email,
           'telfone': telefone,
           'observacoes': observacoes
    
        }
    
        ref.child(chave).update(dados);
    
        limpa();
    
        setAtualizando(false);
    
      }

*/

    return(



        <>
          <Header/>

            <SidebarLeft/>

            <S.Container>
            


            <section>

                <S.Title>Perfil</S.Title>


                
  
               
                    <form onSubmit={handleUpdate}>


                    <input type="text" placeholder="nome"  value={newname} onChange={(event)=> setNewname(event.target.value)}/>
                    

                    
                    <input type="text" placeholder="titulo" value={title} onChange={(event)=> setTitle(event.target.value)} />
                    <input type="tel" placeholder="Telefone" value={tel} onChange={(event)=> setTel(event.target.value)} />
                    
                    <input type="text" placeholder="Descrição extra" value={description} onChange={(event)=> setDescription(event.target.value)}   />
                    <input type="text" placeholder="Localização"  value={local} onChange={(event)=> setLocal(event.target.value)}  />
                    <input type="number" placeholder="Taxa horaria" value={price} onChange={(event)=> setPrice(event.target.value)}  />
                    <input type="file" placeholder="Carregue sua imagem de Perfil"/>
                    


                    <textarea name="" placeholder="Sobre me" value={about} onChange={(event)=> setAbout(event.target.value)}  ></textarea>

                    <input type="submit" value="Enviar" />
                    </form>



                
                    
                    
              


                
            </section>


            
          


            </S.Container>



        
        </>

    );



}