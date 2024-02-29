import React from 'react'
import '../SMLButtonWithIcon/SMLButtonWithIcon.css'

const SMLButtonWithIcon = (props) => {
  return (
   
      <button className='SMLSignupbutton'>
        <span className='sml-iconbtn fontcolorblack'>{props.value}</span>
        </button>
   
  )
}

export default SMLButtonWithIcon
