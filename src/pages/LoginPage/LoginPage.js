import React from 'react'
import "../../styles/Elements.scss";
import SMLLabel from '../../components/Shared/SMLLabel/SMLLabel';
import './LoginPage.css';
import SMLTextBoxWithLabel from '../../components/Shared/SMLTextBoxWithLabel/SMLTextBoxWithLabel';

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
