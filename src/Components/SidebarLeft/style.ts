


import styled from "styled-components";




export const Container = styled.section`


    width: 300px;
    height: 100vh;

    position: fixed;
    left: 0;

    background: #234;
    display: flex;
    flex-direction: column;


    section:first-child{
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid #ddd;

        div:first-child{
            width: 80px;
            height: 80px;
            border: 1px solid #ddd;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                
                width: 75px;
                height: 75px;
                border-radius: 50%;

            }
        }


        div:last-child{

            margin-top: 1rem;
            display: flex;
            flex-direction: column;

            align-items: center;

            span{
                color: #fff;
            }

        }

    }


    section:last-child{
        width: 100%;
        height: 400px;
        

        margin-top: 1rem;

        nav{

           

            ul{
                list-style: none;
                margin-top: 2rem;
                margin-left: 0;
                text-align: left;
                
                

                li{

                    width: 19.2rem;
                    padding-bottom: 0.5rem;
                    padding-top: 0.5rem;
                    
                    position: relative;
                    right: 3rem;
                    
                    text-align: center;
                    color: #fff;
                    display: inline-block;
                    margin-bottom: 1rem;
                    font-size: 1.4rem;

                    font-weight: 400;
                    cursor: pointer;
                    

                    &:hover{
                        background: #001;
                    }


                }
            }
        }
    }



`

