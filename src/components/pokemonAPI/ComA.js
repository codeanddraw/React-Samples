import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComA = () => {
    const [ num, setNum ] = useState()
    const [ name, setName ] = useState()
    const [ moves, setMoves ] = useState()

    useEffect( () =>{
        console.log("Hi")
        async function getData(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(response.data.name)
            setName(response.data.name)
            setMoves(response.data.moves.length)
        }
        getData()
    })
    return <>
    <h1> You chose value: <span style={{color:"darkpink"}}> {num} </span></h1>
    <h1>My name is <span style={{color:"maroon"}}> {name} </span></h1>
    <h1>I have <span style={{color:"darkpink"}}> {moves} </span> moves</h1>
    <select value={num} onChange={(event)=>{
        setNum(event.target.value)  
    }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </>
}

export default ComA;