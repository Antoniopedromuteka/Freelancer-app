


import styled from "styled-components";





export const Container = styled.section`

        width: 30rem;
        height: 30rem;
        padding: 1rem;
        margin-top: 5rem;
        background: #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            font-weight: 500;
        }

        main{
            width: 100%;
            height: 20rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
       


            div{
                margin-top: 1rem;
                width: 100%;
                display: flex;

                justify-content: center;


                button{
                    width: 100%;
                    height: 2.5rem;

                    border: none;

                   
                }

                button:first-child{
                    margin-right: 0.2rem;
                }

                

            }


            form{
                display: flex;
                flex-direction: column;
                width: 100%;

                input{
                    
                    height: 3rem;
                    margin-top: 0.2rem;
                    outline: none;
                    border: none;
                    padding: 0 1rem;
                }

                button{
                    height: 3rem;
                    width: 50%;
                    margin: 0 auto;
                    margin-top: 0.5rem;
                    border: none;
                    border-radius: 0.3rem;

                    background: #000034;

                    color: #fff;


                    transition: filter 0.2s;

                    cursor: pointer;

                    &:hover{
                        filter: brightness(0.8);
                        font-weight: bold;
                    }
                }
            }
        }




`
 