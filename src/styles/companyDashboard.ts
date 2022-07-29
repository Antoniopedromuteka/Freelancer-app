

import styled from "styled-components";



export const Container = styled.main`

    width: 100%;
    margin-top:  5rem;
    height: calc(100vh - 5rem)




`



export const Home = styled.div`

    
    width: calc(100% - 300px);
    margin-left: 300px;
    height: 100vh;
    background: #ddd;

    
    section:first-child{

width: 100%;
height: 10rem;


text-align: center;
margin-bottom: 2rem;

border-bottom: 2px solid #ddd;


h2{
    font-weight: 400;
    font-size: 5vh;
    margin-top: 6rem;
    display: inline-block;
    
}
}



section:last-child{

width: 100%;
height: 10rem;


display: flex;


align-items: center;
justify-content: space-evenly;


flex-wrap: wrap;


margin-top: 2rem;



div{
    width: 30%;
    height: 9rem;
    background: #444;
    display: flex;
    
     
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-weight: 300;
    border-radius: 0.2rem;

    h2{
        margin-left: 1rem;
        font-weight: 400;
    }
 


    section{
         
        width: 20rem;
        height: 10rem;
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -0.5rem;
        
        cursor: pointer;

        &:hover{
            filter: brightness(0.8);
            font-weight: bold;
        }

        h2{
            font-weight: 400;
            margin: 0;
            font-size: 3rem;
        }
    }

    span{
        margin-top: 0.3rem;
       
    }
}



}





`;