

import styled from "styled-components";





export const AdvertsMain = styled.div`

    margin-top: 2rem;
    width: 100%;
    height: 10rem;    
 
    display: flex;
    align-items: center;

    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;


    .block1{
        width: 60%;
        height: 8rem;
 
        h1{
            font-size: 1.4rem;
            font-weight: 600;
        }

        .blockContent{


            span{
                
                margin-right: 1rem;
               
            }
        }

        .blockContent2{
            margin-top: 2rem;
            
        
            
            span{
                margin-right: 1rem;
                
                width: 3rem;
                height: 2rem;
                
                padding: 0.3rem;
                border-radius: 0.3rem;
                cursor: pointer;

                border: 1px solid #ddd;

                &:hover{

                    background: #3e3e3e;
                    color: #fff;
                    transform: scale(0.2) ;
                }
            }


        
        }

        
    }

    



    
    .block2{
                display: flex;
                flex-direction: column;

                button{
                    margin-top: 0.5rem;
                    width: 13rem;
                    height: 2.5rem;
                    border: none;
                    font-size: 1rem;
                    border-radius: 0.3rem;
                    cursor: pointer;
                    background: #3a3b3c;
                    color: #fff;

                    &:hover{
                        background: #3e3e3e;
                        color: #fff;
                    }
                }
    }

    

    

`


