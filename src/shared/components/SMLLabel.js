import React from "react";
import '../styles/Fonts.scss'
import '../styles/HTMLControls.scss'


function SMLLabel(props) {
    return <div>
        <label className={props.style}>
           {props.value}
        </label>
    </div>
}

export default SMLLabel;