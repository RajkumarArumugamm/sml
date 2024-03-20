import React, { useState } from 'react';
import "../../styles/Fonts.scss"
import './MyProfile.css';
import SideNav from '../../components/Shared/SideNav/SideNav';
import Header from '../../components/Shared/Header/Header';
import SMLLabel from '../../components/Shared/SMLLabel/SMLLabel';
import SMLButton from '../../components/Shared/SMLButton/SMLButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import SMLToggleButton from '../../components/Shared/SMLToggleButton/SMLToggleButton';


const MyProfile = (props) => {
    const navigate = useNavigate();

    const handleViewPlanClick = () => {
        navigate('/viewPlan')
    };

    return (
        <div className="myProfile-container">
            <div className="myProfile-sidebar">
                <SideNav />
            </div>
            <div className="myProfile-content">
                <div className="myProfile-header">
                    <Header />
                </div>
                <div className="myProfile-main-content">
                    <SMLLabel style="title2" value="My Profile" />
                    <div className="row" style={{ marginTop: '10px' }}>
                        <div className="col-5">
                            <div className='profile-photo-card'>
                                <div className="profile-fields row">
                                    <div className="col-4">
                                        <div className="form-group profile-photo-avatar">
                                            <img src="https://media.istockphoto.com/id/2031580712/photo/cloud-computing-and-technology-icons-protecting-lifestyle-and-confidential-data-internet.jpg?s=1024x1024&w=is&k=20&c=sNrEo_-kXt1gvGKvBmom1Ky1A_xTo9atNJy3h_I-gDY=" alt="Company Logo" />
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <SMLLabel style="title2" value="Rajkumar" />
                                    </div>
                                    <div className="col-5 text-end">
                                        <SMLButton valueStyle="Button3" style="SMLSecondaryButton" value="Add Photo" />
                                    </div>
                                </div>
                            </div>
                            <div className='profile-email-card'>
                                <div className="row">
                                    <div className="col-5">
                                        <div className="form-group">
                                            <SMLLabel style="title2" value="Email" />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="form-group profile-email-card-value">
                                            <SMLLabel value="rajkumar.a@peerbrains.com" />
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profile-password-card'>
                                <div className="profile-fields row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <SMLLabel style="title2" value="Password" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group profile-password-card-value">
                                            <SMLLabel value="******" />
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-fields row">
                                    <div className="col-3">
                                    </div>
                                    <div className="col-4">
                                        <SMLLabel value="Signed-in with Google" />
                                    </div>
                                    <div className="col-2">
                                        <FontAwesomeIcon className="iconContent" icon={faPen} />
                                    </div>
                                    <div className="col-3">
                                        <SMLButton valueStyle="Button3" style="SMLSecondaryButton" value="Disconnect" />
                                    </div>
                                </div>
                                <div className="profile-fields row">
                                    <div className="col-3">
                                    </div>
                                    <div className="col-4">
                                        <SMLLabel value="Disconnected" />
                                    </div>
                                    <div className='col-2'>
                                        <FontAwesomeIcon className="iconContent" icon={faPen} />

                                    </div>
                                    <div className="col-3">
                                        <SMLButton valueStyle="Button3" style="SMLSecondaryButton" value="Connect" />
                                    </div>
                                </div>
                            </div>
                            <div className='profile-links-card'>
                                <div className="profile-fields row">
                                    <div className="col-7">
                                        <div className="form-group">
                                            <SMLLabel style="title2" value="Links" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group profile-password-card-value">
                                            <SMLLabel value="www.link.com" />
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-fields row">
                                    <div className="col-7">
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group profile-password-card-value">
                                            <SMLLabel value="www.link.com" />
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-fields row">
                                    <div className="col-7">
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group profile-password-card-value">
                                            <SMLLabel value="www.link.com" />
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-fields row">
                                    <div className="col-7">
                                    </div>
                                    <div className="col-5" style={{ textAlign: 'right' }}>
                                        <SMLButton valueStyle="Button3" style="SMLSecondaryButton" value="Add Links" />
                                    </div>
                                </div>
                            </div>
                            <div className='profile-plan-card'>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <SMLLabel style="title2" value="Plan" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <SMLLabel value="Basic" />
                                    </div>
                                    <div className='col-3' onClick={handleViewPlanClick}>
                                        <SMLButton valueStyle="Button3" style="SMLSecondaryButton" type="button" value="View Plan" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='profile-details-card'>
                                <div className='profile-buttons profile-fields'>
                                    <div className='row profile-fields'>
                                        <SMLLabel value="Who are you?" style="title2"></SMLLabel>
                                        <div className="form-group col-12">
                                            <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Vocalist/Musician" />
                                            <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Songwriter" />
                                            <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Producer" />
                                            <SMLButton type="button" valueStyle="Button3" style="SMLSecondaryButton" value="Composer" />
                                        </div>
                                    </div>
                                </div>
                                <div class="profile-experience profile-fields">
                                    <div className='row profile-fields'>
                                        <div className="col-2">
                                            <SMLToggleButton value="Yes" checked="checked" />
                                        </div>
                                        <div className='col-10'>
                                            <SMLLabel value="Do you have experience with sync?" style="title2"></SMLLabel>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile-aboutYouSelf profile-fields'>
                                    <div className='row profile-fields'>
                                        <div className='col-8'>
                                            <SMLLabel value="Tell us about your music experience." style="title2"></SMLLabel>
                                        </div>
                                        <div className='col-4 text-end'>
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>

                                    <div className='row profile-fields'>
                                        <div className='col-12'>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='profile-aboutYouSelf profile-fields'>
                                    <div className='row profile-fields'>
                                        <div className='col-8'>
                                            <SMLLabel value="What kind of guidance are you looking for?" style="title2"></SMLLabel>
                                        </div>
                                        <div className='col-4 text-end'>
                                            <FontAwesomeIcon className="iconContent" icon={faPen} />
                                        </div>
                                    </div>
                                    <div className='row profile-fields'>
                                        <div className='col-12'>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;