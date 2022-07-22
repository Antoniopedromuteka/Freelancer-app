

import * as S  from "../styles/professionals"
import { Header } from "../Components/Header";

export default function Professionals(){

    return(
     <>

        <Header/>

        <S.Container>

        <S.Top>
            <S.Title>Profissionais</S.Title>

            <S.Subtitle>Profissionais que temos na nossa plataforma</S.Subtitle>   
        </S.Top>

        <S.ContainerCards>
        <S.Card>

            <S.CardImage>
             <img src="https://img.freepik.com/free-photo/horizontal-shot-pretty-dark-skinned-woman-with-afro-hairstyle-has-broad-smile-white-teeth-shows-something-nice-friend-points-upper-right-corner-stands-against-wall_273609-16442.jpg?t=st=1658512115~exp=1658512715~hmac=b4bebcc5fa39b87838e62ea6ae77ec78e3a6a465205ec5145b9726de47969ee7&w=1060" alt="" />
            </S.CardImage>
            <S.CardBody>

          
            <S.CardBodyTiled>Nome Completo</S.CardBodyTiled>

            <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>
           

            </S.CardBody>
        
        
            </S.Card> 

            <S.Card>

            <S.CardImage>
            <img src="https://img.freepik.com/free-photo/woman-having-online-class-meeting-through-e-learning-system_53876-101169.jpg?t=st=1658512650~exp=1658513250~hmac=e7544b2b9e549e2d9f6b039d64b6b49d28762ee78315fcea925189ca3b701018&w=1060" alt="" />
            </S.CardImage>
            <S.CardBody>


            <S.CardBodyTiled>Nome Completo</S.CardBodyTiled>

            <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>


            </S.CardBody>


            </S.Card> 


            <S.Card>

                    
                <S.CardImage>
                <img src="https://img.freepik.com/free-photo/african-american-business-woman-working-computer-bar_1303-10865.jpg?t=st=1658512115~exp=1658512715~hmac=f62212b45957e7b012a44db381c9e75384e65180313349919a3b332773a7e6b7&w=1060" alt="" />
                </S.CardImage>
                <S.CardBody>


                <S.CardBodyTiled>Nome Completo</S.CardBodyTiled>

                <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>


                </S.CardBody>


                </S.Card> 
        


        </S.ContainerCards>


        </S.Container>






     </>  

    );

}