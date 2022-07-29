




import styled from "styled-components";



export const Container = styled.main`

    width: 100%;
    height: calc(100vh - 5rem);

    margin-top: 5rem;


    section{
        width: calc(100% - 300px);
        height: 100vh;


        margin-left: 300px;
        

        display: flex;
        flex-direction: column;



        form{
            width: 100%;
            height: 30rem;
            display: flex;
            flex-direction: column;
             

            input, textarea{
                width: 20rem;
                height: 3rem;
                
                margin: 0.5rem auto;

                padding: 0.5rem;

                border: 1px solid #ddd;
                outline: none;

                


            }
            
        }

    }

`


export const Title = styled.h2`

    text-align: center;
    margin-top: 7rem;
    font-weight: 400;
    font-size: 4vh;




`
