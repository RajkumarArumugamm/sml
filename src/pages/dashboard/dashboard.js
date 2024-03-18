import React, { useState } from 'react';
import "../../styles/Fonts.scss"
import './dashboard.css';
import SideNav from '../../components/Shared/SideNav/SideNav';
import Header from '../../components/Shared/Header/Header';

const Dashboard = (props) => {
    return (
        <div class="dashboard-container">
            <div class="dashboard-sidebar">
                <SideNav/>
            </div>
            <div class="dashboard-content">
                <div class="dashboard-header">
                    <Header/>
                </div>
                <div class="dashboard-main-content">
                    Dashboard
                </div>
            </div>
        </div>
    )
}

export default Dashboard;