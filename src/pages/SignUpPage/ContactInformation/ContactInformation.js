import React, { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import SMLLabel from '../../../components/Shared/SMLLabel/SMLLabel';
import "../../../styles/Fonts.scss"
import '../../SignUpPage/SignUpPage.css';
import SMLTextBoxWithLabel from '../../../components/Shared/SMLTextBoxWithLabel/SMLTextBoxWithLabel';
import SMLTextBox from '../../../components/Shared/SMLTextBox/SMLTextBox';
import SMLButton from '../../../components/Shared/SMLButton/SMLButton';
import { Button } from '@mui/material';
import SMLButtonWithIcon from '../../../components/Shared/SMLButtonWithIcon/SMLButtonWithIcon';
import SMLLinkButton from '../../../components/Shared/SMLLinkButton/SMLLinkButton';
import Alert from '@mui/material/Alert';
import SMLCheckbox from '../../../components/Shared/SMLCheckbox/SMLCheckbox';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from '../ProgressSteps/ProgressSteps';


const ContactInformation = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [agreeConditions, setAgreeConditions] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [createPasswordError, setCreatePasswordError] = useState('');
    const [verifyPasswordError, setVerifyPasswordError] = useState('');
    const navigate = useNavigate();

    const handleContactInformation = (e) => {
        e.preventDefault();

        // Validate Full Name
        if (!fullName.trim()) {
            setFullNameError('Full Name is required');
            return;
        }
        else {
            setFullNameError("")
        }


        // Validate email
        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        }
        else {
            setEmailError("")
        }

        // Validate create password
        if (!createPassword.trim()) {
            setCreatePasswordError('Create Password is required');
            return;
        }
        else {
            setCreatePasswordError("")
        }

        // Validate verify password
        if (!verifyPassword.trim()) {
            setVerifyPasswordError('Verify Password is required');
            return;
        }
        else {
            setVerifyPasswordError("")
        }

        // Your signUp logic here
        console.log('Contact Information ...');
        console.log(props);
        props.onContactInformationClick();
    };

    const handleLoginClick = () => {
        navigate('/login')
    };


    return (
        <div className='signUp-container'>
            <div className='signup-card'>
                <div className="signUp-groupby">
                    <div className="signUp-progress-steps">
                        <ProgressSteps step="1" />
                    </div>
                    <div className='signUp-close-div'>
                        x
                    </div>
                </div>
                <div className="signUp-main">
                    <div className='signUp-label-div'>
                        <SMLLabel value="Contact Information" style="Mainheader" />
                    </div>
                    <form className="signUp-grid" onSubmit={handleContactInformation}>
                        <div className='signUp-content'>
                            <div className='signUp-controls'>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Full Name" style="title2"></SMLLabel>
                                    <SMLTextBox value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                    {fullNameError && <span className="button1 error">{fullNameError}</span>}
                                </div>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Email" style="title2"></SMLLabel>
                                    <SMLTextBox value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {emailError && <span className="button1 error">{emailError}</span>}
                                </div>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Create Password" style="title2"></SMLLabel>
                                    <SMLTextBox value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} />
                                    {createPasswordError && <span className="button1 error">{createPasswordError}</span>}
                                </div>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Verify Password" style="title2"></SMLLabel>
                                    <SMLTextBox value={email} onChange={(e) => setVerifyPassword(e.target.value)} />
                                    {verifyPasswordError && <span className="button1 error">{verifyPasswordError}</span>}
                                </div>
                                <div className='signUp-fields'>
                                    <div className="signUp-groupby">
                                        <SMLCheckbox value={agreeConditions} onChange={(e) => setAgreeConditions(e.target.value)} />
                                        <SMLLabel value="I accepted all terms and conditions" style="title2"></SMLLabel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="signUp-content">
                            <div className="signUp-controls">
                                <div className='divider'></div>
                                <span>or</span>
                                <div className='divider'></div>
                            </div>
                        </div>
                        <div className='signUp-right-content'>
                            <div className='signUp-controls'>
                                <div className='signUp-fields'>
                                    <SMLButtonWithIcon type="button" value="Sign up with Google" icon="home" />
                                </div>
                                <div className='signUp-fields'>
                                    <SMLButtonWithIcon type="button" value="Sign up with Facebook" icon="cloud" />
                                </div>
                                <div className='signUp-fields'>
                                    <div className="signUp-groupby">
                                        <SMLLabel value="Already a member?" style="title2"></SMLLabel>
                                        <button type="button" className='btn-no-margin button1' onClick={handleLoginClick}>Log in</button>
                                    </div>
                                </div>
                            </div>
                            <div className="signUp-footer">
                                <div style={{ marginLeft: '220px' }}>
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

export default ContactInformation;