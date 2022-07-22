

import React from 'react'
import {Header} from "../Components/Header/index"

 
 

import * as S from '../styles/Posts';

const Posts = () => {
  return (
    <>
     
    <S.Container>

        <S.Top>
             <S.Title>Post</S.Title>

             <S.Subtitle>Post que temos na nossa plataforma</S.Subtitle>   


        </S.Top>
        
    
        <S.ContainerCards>

            
        <S.Header>

            <input type="text" name="" placeholder="Pesquisar"/>
            <button>Enviar</button>
                
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
