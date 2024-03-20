import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './ViewPlan.css';
import SMLLabel from '../../../components/Shared/SMLLabel/SMLLabel';
import SMLCheckbox from '../../../components/Shared/SMLCheckbox/SMLCheckbox';
import SMLButton from '../../../components/Shared/SMLButton/SMLButton';


const ViewPlan = () => {
    return (
        <div className='viewPlan-container'>
            <div className='viewPlan-card'>
                <div className='viewPlan-close-div'>
                    x
                </div>
                <div className='viewPlan-label-div'>
                    <SMLLabel value="Upgrade Your Plan" style="Mainheader1" />
                </div>
                <form className="viewPlan-grid">
                    <Card>
                        <div class="viewPlan-card-header">
                            <Card.Title>Basic</Card.Title>
                        </div>
                        <Card.Body>
                            <div className='viewPlan-sub-header-block'>
                                <div className="viewPlan-sub-header-content">
                                    $12
                                </div>
                            </div>
                            <div class="viewPlan-horizontal-line"></div>
                            <div className='viewPlan-card-content'>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="1 track review per month"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Adjustment tips"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="1 follow-up review per track"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Certification"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Distribution to networks"></SMLLabel>
                                </div>
                            </div>
                        </Card.Body>
                        <div className='viewPlan-card-footer'>
                            <SMLLabel value="Current Plan" style="Label1"></SMLLabel>
                        </div>
                    </Card>
                    <Card className='premium-card'>
                        <div className='viewPlan-card-header'>
                            <Card.Title>Premium</Card.Title>
                        </div>
                        {/* <div className="premium-card-sub-caption">BEST VALUE</div> */}
                        <Card.Body>
                            <div className='viewPlan-sub-header-block'>
                                <div className="viewPlan-sub-header-content">
                                    $20
                                </div>
                            </div>
                            <div class="viewPlan-horizontal-line"></div>
                            <div className='viewPlan-card-content'>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="10 track reviews per month"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Ongoing feeback"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Video sessions"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Certification"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Distribution to networks"></SMLLabel>
                                </div>
                            </div>
                        </Card.Body>
                        <div className='viewPlan-card-footer'>
                            <SMLButton value="Upgrade" style="SMLWhiteButton" valueStyle="Button4"></SMLButton>
                        </div>
                    </Card>
                    <Card>
                        <div className='viewPlan-card-header'>
                            <Card.Title>Pro</Card.Title>
                        </div>
                        <Card.Body>
                            <div className='viewPlan-sub-header-block'>
                                <div className="viewPlan-sub-header-content">
                                    $54
                                </div>
                            </div>
                            <div class="viewPlan-horizontal-line"></div>
                            <div className="viewPlan-card-content">
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Unlimited track reviews"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Ongoing feeback"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="1-on-1 video coaching"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Certification and distribution"></SMLLabel>
                                </div>
                                <div className='viewPlan-fields-groupBy'>
                                    <SMLCheckbox></SMLCheckbox>
                                    <SMLLabel value="Sync and Career strategy collaboration."></SMLLabel>
                                </div>
                            </div>
                        </Card.Body>
                        <div className='viewPlan-card-footer'>
                            <SMLButton value="Upgrade" style="SMLBlackButton" valueStyle="Button1"></SMLButton>
                        </div>
                    </Card>
                </form>
            </div>
        </div>
    );
};

export default ViewPlan;
