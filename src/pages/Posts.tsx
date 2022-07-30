

import React, { FormEvent, FormEventHandler, useState } from 'react'
import {Header} from "../Components/Header/index"


import { storage } from '../../services/firebase';

import * as S from '../styles/Posts';

const Posts = () => {
   
  const [imgURL, setImgURL] = useState();
  const [progress, setProgress] = useState(0);

  const FormHandler = (event:any) =>{

    event.preventDefault();

    const file = event.target[1].files[0];

    uploadFiles(file);

  }


  const uploadFiles = (file:any) =>{
    const uploadTask = storage.ref(`files/${file.name}`).put(file);

    uploadTask.on('state_changed', snapshot =>{

      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

      setProgress(prog);

    },
     error => console.log(error),
     () =>{
        storage.ref("files").child(file.name).getDownloadURL().then(url =>{
          console.log(url)
        })
     }
     );
  }

   

  return (
    <>
     
    <S.Container>

        <S.Top>
             <S.Title>Post</S.Title>

             <S.Subtitle>Post que temos na nossa plataforma</S.Subtitle>   

            <h2>carrengado {progress}%</h2>
        </S.Top>
        
    
        <S.ContainerCards>

            
        <S.Header>
          <form onSubmit={FormHandler}>
            <input type="text"  placeholder='poste alguma coisa' />
            <input type="file" name="" placeholder="Pesquisar"/>
     
            <button type='submit'>Enviar</button>
          </form>

      
                
        </S.Header>
    


           <S.Card>

            <S.CardImage>
                <img src="https://img.freepik.com/free-photo/woman-having-online-class-meeting-through-e-learning-system_53876-101169.jpg?t=st=1658512650~exp=1658513250~hmac=e7544b2b9e549e2d9f6b039d64b6b49d28762ee78315fcea925189ca3b701018&w=1060" alt="imagem"/>
            </S.CardImage>
            <S.CardTitle>Titulo</S.CardTitle>
            <S.CardDescription>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            </S.CardDescription>
            </S.Card> 
           
        </S.ContainerCards>


    </S.Container>


    
    </>
  )
}

export default Posts;
