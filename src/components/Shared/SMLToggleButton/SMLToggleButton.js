import React from 'react'
import '../../../styles/Fonts.scss'
import '../../../styles/HTMLControls.scss'
import "../SMLToggleButton/SMLToggleButton.css"

const SMLToggleButton = (props) => {
    return (
        
        <label className="switch">
        <input type="checkbox" {...props.checked} />
        <span className="slider round">{props.value}</span>
        </label>
    )
}

export default SMLToggleButton
