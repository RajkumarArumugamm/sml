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
                                <SMLButton valueStyle="Button3" style="SMLSecondaryButton" type="button" value="View Plan"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;