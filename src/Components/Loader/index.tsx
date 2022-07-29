




import React from 'react'

import {Circles} from "react-loader-spinner"

import styled from 'styled-components'




export const Loader = () => {

    const Conteiner = styled.div`
        
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

    `

  return (

    <Conteiner>

    <Circles color="#00BFFF" height={100} width={100}/>

    </Conteiner>
    
  )
}

 