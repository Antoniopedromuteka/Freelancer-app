

import styled from "styled-components";



export const Container = styled.div`


    width: 100%;
    height: calc(100vh - 5rem);

    
    margin-top: 5rem;
    

`


export const Adverts = styled.div`

    width: calc(100% - 300px);
    margin-left: 300px;
    height: calc(100vh - 5rem);
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2{
        margin-top: 2rem;

        font-weight: 500;
        text-align: center;

    }


    form{
        width: 30rem;
        height: 40rem;
        display: flex;
        flex-direction: column;

        input{
            width: 100%;
            height: 3rem;
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            outline: none;
            border: 1px solid #ddd;
            border-radius: 0.2rem;
        }

        button{
            width: 50%;
            height: 3rem;
            margin: 1rem auto;
            border: 1px solid #ddd;
            color: #fff;
            font-size: 1rem;
            background: #28343B;
            border-radius: 0.3rem;
        }
    }

   



`