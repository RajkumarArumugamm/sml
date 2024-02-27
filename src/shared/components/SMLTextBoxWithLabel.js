import React from "react";
import '../styles/Fonts.scss'
import '../styles/HTMLControls.scss'

function SMLTextBoxWithLabel(props) {
    return <div className="input-box">
        <label className="title2">Full Name</label>
        <input className="SLMTextbox" />
    </div>
}

export default SMLTextBoxWithLabel;