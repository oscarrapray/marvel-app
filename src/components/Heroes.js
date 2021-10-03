import React, { useEffect, useState } from "react";
import axios from 'axios'
import Heroe from "./Heroe";

const Heroes = () =>{
    const [state,setState] = useState([])

    const consultarApi = async () =>{
            const respuesta = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=cc33eb821314e08e79183f46724d593e&hash=9507760c50ef007a5d386e426a48d5ea')
            setState(respuesta.data.data.results)
    }

    useEffect(()=>{
        consultarApi()
    },[])

    return (

        <div className = 'container'>
            <div className = "l-container">
                <h1>Lista de Super Heroes</h1>
                <div className = "container-grid">
                    {
                        state.map(h =>(
                            <Heroe 
                                key = {h.id}
                                title ={h.name}
                                url={`${h.thumbnail.path}.${h.thumbnail.extension}`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Heroes