import React, { useState } from 'react';
import SMLLabel from '../../../components/Shared/SMLLabel/SMLLabel';
import "../../../styles/Fonts.scss"
import '../../SignUpPage/SignUpPage.css';
import SMLTextBox from '../../../components/Shared/SMLTextBox/SMLTextBox';
import SMLButton from '../../../components/Shared/SMLButton/SMLButton';
import SMLToggleButton from '../../../components/Shared/SMLToggleButton/SMLToggleButton';
import { Button } from '@mui/material';
import SMLTextArea from '../../../components/Shared/SMLTextArea/SMLTextArea';
import ProgressSteps from '../ProgressSteps/ProgressSteps';

const AboutYou = (props) => {
   
    const handleAbout = (e) => {
        e.preventDefault();

        console.log('About you ...');
        props.onAboutClick();

    };

    return (
        <div className='signUp-container'>
            <div className='signup-card'>
            <div className="signUp-groupby">
                    <div className="signUp-progress-steps">
                        <ProgressSteps step="2" />
                    </div>
                    <div className='signUp-close-div'>
                        x
                    </div>
                </div>
            
                <div className="signUp-main">
                    <div className='signUp-label-div'>
                        <SMLLabel value="Tell Us About Yourself" style="Mainheader" />
                    </div>
                    <form  className="signUp-grid" onSubmit={handleAbout}>
                        <div className='signUp-content'>
                            <div className='signUp-controls'>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Who are you?" style="title2"></SMLLabel>
                                    <div className="signUp-groupby">
                                        <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Vocalist/Musician" />
                                        <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Songwriter" />
                                        <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Producer" />
                                        <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Composer" />
                                    </div>
                           
                                </div>
                                <div className='signUp-fields'>
                                    <div className="signUp-groupby">
                                        <SMLToggleButton value="Yes" checked="checked" />
                                        <SMLLabel value="Do you have experience with sync?" style="title2"></SMLLabel>
                                    </div>
                                </div>
                                <div className='signUp-fields'>
                                    <SMLLabel value="How did you hear about Sync Music Lab?" style="title2"></SMLLabel>
                                    <SMLTextBox/>
                                </div>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Add Personal Links" style="title2"></SMLLabel>
                                    <SMLTextBox />
                                    <b>+</b>
                                 </div>
                            </div>
                        </div>
                        <div className='signUp-content'>
                            <div className='signUp-controls'>
                                <SMLLabel value="Tell us about your music experience." style="title2"></SMLLabel>
                                <SMLTextArea/>
                                <SMLLabel value="What kind of guidance are you looking for?" style="title2"></SMLLabel>
                                <SMLTextArea/>
                            </div>
                            <div className="signUp-footer">
                                <div style={{marginLeft:'275px'}}>
                                  <SMLButton style="SMLButton2" value="Continue" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AboutYou;