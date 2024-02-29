import React from 'react'
import '../../../styles/Fonts.scss'
import '../../../styles/HTMLControls.scss'
import "../SMLButton/SMLButton.css"

const SMLButton = (props) => {
    return (
        
            <button className={props.style}>
                <span className='Button1'>{props.value}</span>
            </button>
        
    )
}

export default SMLButton
