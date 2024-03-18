import React, { useState } from 'react';
import SMLLabel from '../../../components/Shared/SMLLabel/SMLLabel';
import "../../../styles/Fonts.scss"
import '../../SignUpPage/SignUpPage.css';
import SMLTextBox from '../../../components/Shared/SMLTextBox/SMLTextBox';
import SMLButton from '../../../components/Shared/SMLButton/SMLButton';
import SMLToggleButton from '../../../components/Shared/SMLToggleButton/SMLToggleButton';
import { Button } from '@mui/material';
import SMLTextArea from '../../../components/Shared/SMLTextArea/SMLTextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { useBeforeUnload, useNavigate } from 'react-router-dom';

const Welcome = (props) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/dashboard');
    };
    const handleLoginClick = () => {
        navigate("/login");
    }
   
    return (
        <div className='signUp-container'>
            <div className='signup-card'>
                
                <div className="signUp-main">
                    <div className='signUp-label-div'>
                        <SMLLabel value="Welcome On Board!" style="Mainheader" />
                        <SMLButton style="SMLButton2" type="button" value="Login" handleClickEvent={handleLoginClick} />
                        <button className='btn-no-margin button1' type="button" onClick={handleHomeClick}>Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;