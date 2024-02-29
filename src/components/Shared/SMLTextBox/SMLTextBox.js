import React from "react";
import '../../../styles/Fonts.scss'
import '../../../styles/HTMLControls.scss'

function SMLTextBox(props) {
    return <div>
        <input className="SMLTextbox" onChange={props.onChange}
         />
    </div>
}

export default SMLTextBox;