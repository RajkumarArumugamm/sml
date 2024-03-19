import React, { useState } from 'react';
import "../../styles/Fonts.scss"
import './MyProfile.css';
import SideNav from '../../components/Shared/SideNav/SideNav';
import Header from '../../components/Shared/Header/Header';
import SMLLabel from '../../components/Shared/SMLLabel/SMLLabel';
import SMLButton from '../../components/Shared/SMLButton/SMLButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const MyProfile = (props) => {
    return (
        <div class="myProfile-container">
            <div class="myProfile-sidebar">
                <SideNav />
            </div>
            <div class="myProfile-content">
                <div class="myProfile-header">
                    <Header />
                </div>
                <div class="myProfile-main-content">
                    <SMLLabel style="MainHeader" value="My Profile" />
                    <div className='profile-photo-card'>
                        <div className="profile-photo-avatar">
                            <img src="https://media.istockphoto.com/id/2031580712/photo/cloud-computing-and-technology-icons-protecting-lifestyle-and-confidential-data-internet.jpg?s=1024x1024&w=is&k=20&c=sNrEo_-kXt1gvGKvBmom1Ky1A_xTo9atNJy3h_I-gDY=" alt="Company Logo" />
                            <SMLLabel value="Rajkumar A" />
                        </div>
                        <div className="profile-add-photo">
                            <SMLButton valueStyle="Button3" style="SMLSecondaryButton" value="Add Photo" />
                        </div>
                    </div>
                    <div className='profile-email-card'>
                        <div className='profile-email-card-content'>
                            <div className='profile-email-card-label'>
                                <SMLLabel value="Email" />
                            </div>
                            <div className='profile-email-card-value'>
                                <SMLLabel value="rajkumar.a@peerbrains.com" />
                                <FontAwesomeIcon className="iconContent" icon={faPen} />
                            </div>
                        </div>
                    </div>
                    <div className='profile-password-card'>

                    </div>
                    <div className='profile-links-card'>

                    </div>
                    <div className='profile-plan-card'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;