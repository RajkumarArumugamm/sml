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
import '../../SignUpPage/Payment/payment.css';
 
 
 
const Payment = (props) => {
 
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [createPassword, setCreatePassword] = useState();
    const [agreeConditions, setAgreeConditions] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
 
 
 
    const handleContactInformation = () => {
 
    }
 
    return (
        <div className='signUp-container'>
            <div className='signup-card'>
                <div className='signUp-close-div'>
                    x
                </div>
                <div className="signUp-main">
                    <div className='signUp-label-div'>
                        <SMLLabel value="Contact Information" style="Mainheader" />
                    </div>
                    <form className="signUp-grid" onSubmit={handleContactInformation}>
                        <div className='signUp-content'>
                            <div className='signUp-controls'>
                                <div className='signUp-fields'>
                                    <SMLLabel value="Cardholder Number" style="title2" ></SMLLabel>
                                    <SMLTextBox value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                    {/* {fullNameError && <span  className="button1 error">{fullNameError}</span>} */}
                                </div>
                                <div className='signUp-fields'>
                                    <SMLLabel value="CardNumber" style="title2"></SMLLabel>
                                    <SMLTextBox value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {/* {emailError && <span className="button1 error">{emailError}</span>} */}
                                </div>
                                <div className='signUp-fields signUp-fields-inline'>
                                    <div className='signUp-fields signUp-fields-inline'>
                                        <SMLLabel value="Expiry Date" style="title2" />
                                        <SMLTextBox value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} />
                                        {/* {createPasswordError && <span className="button1 error">{createPasswordError}</span>} */}
                                    </div>
                                    <div className='signUp-fields signUp-fields-inline'>
                                        <SMLLabel value="CVV" style="title2" />
                                        <SMLTextBox value={email} onChange={(e) => setVerifyPassword(e.target.value)} />
                                        {/* {verifyPasswordError && <span className="button1 error">{verifyPasswordError}</span>} */}
                                    </div>
                                </div>
 
                                <div className='signUp-fields signUp-fields-inline'>
                                    <div className='signUp-fields signUp-fields-inline'>
                                        <SMLLabel value="Country" style="title2" />
                                        <SMLTextBox value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} />
                                        {/* {createPasswordError && <span className="button1 error">{createPasswordError}</span>} */}
                                    </div>
                                    <div className='signUp-fields signUp-fields-inline'>
                                        <SMLLabel value="ZIP CODE" style="title2" />
                                        <SMLTextBox value={email} onChange={(e) => setVerifyPassword(e.target.value)} />
                                        {/* {verifyPasswordError && <span className="button1 error">{verifyPasswordError}</span>} */}
                                    </div>
                                </div>
 
                                <div className='signUp-fields'>
                                    <div className="signUp-groupby">
                                        <SMLCheckbox value={agreeConditions} onChange={(e) => setAgreeConditions(e.target.value)} />
                                        <SMLLabel value="I accepted all terms and conditions" style="title2"></SMLLabel>
                                    </div>
                                    {/* {AgreeConditionsError && <span className="button1 error">{AgreeConditionsError}</span>} */}
                                </div>
                            </div>
                        </div>
 
                        {/* <div className="signUp-content">
                            <div className="signUp-controls">
                                <div className='divider'></div>
                                <span>or</span>
                                <div className='divider'></div>
                            </div>
                        </div> */}
                        <div className='signUp-right-content'>
                            <div className='empty-card-container'>
                                <div className='empty-card'></div>
                            </div>
                        </div>
                    </form>
                    <div className="footer-back">
                        <div>
                            <button className="" value="back" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    )
}
 
export default Payment;