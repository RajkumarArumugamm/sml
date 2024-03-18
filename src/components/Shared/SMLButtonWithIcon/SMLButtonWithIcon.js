import React from 'react'
import '../SMLButtonWithIcon/SMLButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';


const SMLButtonWithIcon = (props) => {
  var icons = "";
  switch (props.icon) {
    case "home":
      icons = faHome;
      break;
    case "cloud":
      icons = faCloudArrowUp;
      break;
    case 2:
      break;
    default:
  }
  
    return (
   
      <button className='SMLSignupbutton' type={props.type?props.type:'Submit'}>
        <span className='sml-iconbtn fontcolorblack'><FontAwesomeIcon icon={icons} /> {props.value}</span>
        </button>
   
  )
}

export default SMLButtonWithIcon
