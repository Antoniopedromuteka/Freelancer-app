


import styled from "styled-components";




export const Container = styled.main`

    width: 100%;
    height: calc(100vh - 5rem);

    margin-top: 5rem;


    main{

        width: calc(100% - 300px);

        margin-left: 300px;

        height: 100vh;


        section{
            width: 100%;
            height: 14rem;
         
           

            display: flex;
            flex-direction: column;
          

            align-items: center;

            border-bottom: 1px solid #ddd;

            h2{
                font-size: 4vh;
                margin-top: 4rem;
                font-weight: 300;
            }

            div{
                width: 60%;
                height: 6rem;
              
                display: flex;
                align-items: center;
                justify-content: center;
                
                input{
                    width: 40rem;
                    height: 3.5rem;
                    border: none;
                    outline: none;
                    padding: 1rem;
                    font-size: 1rem;
                    background: #ddd    ;

                    border-radius: 0.2rem;
                }
            }
        }

       
    }



 

`