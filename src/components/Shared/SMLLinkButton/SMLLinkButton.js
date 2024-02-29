import React from 'react'
import '../../../styles/Fonts.scss'
import '../../../styles/HTMLControls.scss'
import "../SMLButton/SMLButton.css"
import "../SMLLinkButton/SMLLinkButton.css"

const SMLLinkButton = (props) => {
    return (
        
            <button className="link-btn">
                <span className='sub-subtitle2'>{props.value}</span>
            </button>
        
    )
}

export default SMLLinkButton
