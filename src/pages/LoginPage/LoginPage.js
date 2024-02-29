import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SMLLabel from '../../components/Shared/SMLLabel/SMLLabel';
import "../../styles/Fonts.scss"
import './LoginPage.css';
import SMLTextBoxWithLabel from '../../components/Shared/SMLTextBoxWithLabel/SMLTextBoxWithLabel';
import SMLTextBox from '../../components/Shared/SMLTextBox/SMLTextBox';
import SMLButton from '../../components/Shared/SMLButton/SMLButton';
import { Button } from '@mui/material';
import SMLButtonWithIcon from '../../components/Shared/SMLButtonWithIcon/SMLButtonWithIcon';
import SMLLinkButton from '../../components/Shared/SMLLinkButton/SMLLinkButton';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate email
        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        }
        else {
            setEmailError("")
        }

        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required');
            return;
        }
        else{
            setPasswordError("")    
        }

        // Your login logic here
        console.log('Logging in...');
    };

    return (
        <div className='Popup-container'>
            <div className='login-card'>
                <div className='Login-close-div'>
                    x
                </div>
                <div className="login-main">
                    <div className='login-label-div'>
                        <SMLLabel value="Log In" style="Mainheader" />
                    </div>
                    <form className='Login-content' onSubmit={handleLogin}>
                        <div className='login-controls'>
                            <div className='login-fields'>
                                <SMLLabel value="Email" style="title2"></SMLLabel>
                                <SMLTextBox value={email} onChange={(e) => setEmail(e.target.value)} />
                                {emailError && <span  className="button1 error">{emailError}</span>}
                            </div>
                            <div className='login-fields'>
                                <div className="login-groupby">
                                    <label className="title2">Password</label>
                                    <SMLLinkButton value="forgot password?"></SMLLinkButton>
                                </div>
                                <SMLTextBox value={password} onChange={(e) => setPassword(e.target.value)} />
                                {passwordError && <span className="button1 error">{passwordError}</span>}
                                <SMLLinkButton value="remember me"></SMLLinkButton>
                            </div>
                        </div>
                        <div className="login-controls1">
                            <div className='login-fields1'>
                                <SMLButton style="SMLButton1" value="Log In" />
                                <div className="login-groupby">
                                    <div className='div-line'></div><p>or</p>
                                    <div className='div-line'></div>
                                </div>
                            </div>

                            <div className='login-fields1'>
                                <div className="login-groupbyBtns">
                                    <SMLButtonWithIcon value="Sign up with google" />

                                    <SMLButtonWithIcon value="Sign up with facebook" />
                                </div>
                                <div className='login-card-end'>
                                    <div className="login-groupbyBtns">
                                        <button className='btn-no-margin button1' >not a member</button>
                                        <button className='btn-no-margin button1' >sign up</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;