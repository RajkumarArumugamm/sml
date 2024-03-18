import React from 'react'
import '../../../styles/Fonts.scss'
import '../../../styles/HTMLControls.scss'
import "../SMLButton/SMLButton.css"

const SMLButton = (props) => {
    return (
        
            <button className={props.style} type={props.type?props.type:"Submit"} onClick={props.handleClickEvent}>
                <span className={props.valueStyle?props.valueStyle:'Button1'}>{props.value}</span>
            </button>
        
    )
}

export default SMLButton
