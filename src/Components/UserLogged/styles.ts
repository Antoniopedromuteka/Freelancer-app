


import styled from "styled-components";



export const Container = styled.section`


    width: 300px;
    height: 5rem;
    

    border-radius: 0.3rem;


    display: flex;

    align-items: center;
    justify-content: space-between;



    section:first-child{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0.5rem;

        

     

        &:hover{

            background: #ddd;
            font-weight: bold;
            transition: 0.2s;

        }
    }

    section:last-child{

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        height: 100%;
        cursor: pointer;

        span{
            margin-right: 0.9rem;
            font-weight: bold;
        }

        div{
            width: 35px;
            height: 35px;
            border: 1px solid #ddd;
            border-radius: 50%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }

        }

        margin-right: 0.5rem;




        &:hover{

            background: #ddd;
            transition: 0.2s;



        }



    }



`


export const ContainerMenu = styled.section`

    width: 200px;
     
    position: absolute;
    right: 1rem;
    top: 5.2rem;
   
     

     background: #ddd;


    nav{
        
        display: flex;
        align-items: center;
        justify-content: center;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;


            li{

                margin-bottom: 0.5rem;
                text-align: center;

            }
        }
    }


`

 
