import { FormEvent, useContext, useEffect, useState } from "react";
import { database, storage } from "../../services/firebase";
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
    
  const [imgURL, setImgURL] = useState<string>("");
 

  const uploadFiles = (file:any) =>{

    if(!file) return;

    const uploadTask = storage.ref(`files/${file.name}`).put(file);

    uploadTask.on('state_changed', snapshot =>{
 

    },
     error => console.log(error),
     () =>{
        storage.ref("files").child(file.name).getDownloadURL().then(url =>{ setImgURL(url);  })
     }
     );
  }



    const [about, setAbout] = useState("");


    function handleUpdate(event:any){

          event.preventDefault();

      

        const file = event.target[6].files[0];

        console.log(file);

       uploadFiles(file);
        
 
        const ref = database.ref("freelancer/");

        const datas = {
            "name" : newname,
            "profileDatas":{
                "about" : about,
                "descriptionTitle" : title,
                "image": imgURL,
                "descriptionExtra" : description,
                "price" : price,
                "location" : local,
                "tel": tel,

            }
           
        }

        ref.child(key).update(datas);
 
    }

 
    


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