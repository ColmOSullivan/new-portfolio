import {FaCrow, FaDove, FaGrimace, FaMagic, FaEmpire, FaCandyCane, FaDiceD20, FaGamepad,FaGrinTears} from 'react-icons/fa';
import { useState, useEffect } from 'react'

function DisplayIcon(){
    const [oneIcon, setOneIcon] =useState([])

    useEffect(() =>{
    const iconArray = [
        <FaCandyCane/>,
        <FaCrow />,
        <FaDove />,
        <FaGrimace />,
        <FaDiceD20/>,
        <FaMagic/>,
        <FaEmpire/>,
        <FaGamepad />,
        <FaGrinTears />
    ]
        const randomNumber = [Math.floor(Math.random() * iconArray.length)]
        setOneIcon(iconArray[randomNumber])
    },[])
    

    return(
        
        <>{oneIcon}</>
    )
}

export default DisplayIcon