
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Typography from '@mui/material/Typography';
import CardCaracter from '../../common/cardCharacter/CardCaracter';




const Characters = () => {
    
    const [character,setCharacters]=useState([]);

    //permite trabajar de manera asincrona recibe un callback y un arreglo de dependencia.

    useEffect(()=>{
        // fetch("https://rickandmortyapi.com/api/character")
        // .then(respuesta=>respuesta.json())
        // .then(respuesta=>setCharacters(respuesta.results))

        axios.get("https://rickandmortyapi.com/api/character")
        .then(respuesta=>setCharacters(respuesta.data.results))
    },[])

    console.log(character)




  return (
    <>
    <Typography variant="h2" color="primary" align="center">ersonajes</Typography>
     <div style={
      {
        width:"100%",
        border:"2px solid black",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px",
        padding:"20px"

      }
     }>
    {
        character.map((item)=>{
            return(
              <CardCaracter item={item} key={item.id}/>
            )
        })
    }
    </div>
    </>
  )
}

export default Characters