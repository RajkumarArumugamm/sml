import React from 'react'
import "../../shared/styles/Elements.scss"
import SMLLabel from '../../shared/components/SMLLabel'
import './login.css';
import SMLTextBoxWithLabel from '../../shared/components/SMLTextBoxWithLabel';

const Login = () => {
    return (
        <div className='Popup-container'>
            <div className='login-card'>
                <div className='Login-close-div'>
                    x
                </div>
                <form className='Login-content'>
                    <div className='login-label-div'>
                        <SMLLabel value="Log In" style="Mainheader"/>
                        <SMLTextBoxWithLabel />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
