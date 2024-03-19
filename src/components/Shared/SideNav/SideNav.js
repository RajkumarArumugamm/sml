import React from 'react';
import '../SideNav/SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUpload, faClock, faComment, faUser, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  return (
    <div className="header">
      <img src="https://media.istockphoto.com/id/2031580712/photo/cloud-computing-and-technology-icons-protecting-lifestyle-and-confidential-data-internet.jpg?s=1024x1024&w=is&k=20&c=sNrEo_-kXt1gvGKvBmom1Ky1A_xTo9atNJy3h_I-gDY=" alt="Company Logo" />
    </div>
  );
};

const Content = () => {
  const navigate = useNavigate();

  const handleMyProfileClick = () => {
    navigate('/myProfile')
  };
  return (
    <div className="content">
      <ul>
        <li><FontAwesomeIcon className="iconContent" icon={faHome} /> Dashboard</li>
        <li><FontAwesomeIcon className="iconContent" icon={faUpload} /> Uploaded Tracks</li>
        <li><FontAwesomeIcon className="iconContent" icon={faClock} /> Under Review</li>
        <li><FontAwesomeIcon className="iconContent" icon={faComment} /> Feedback Received</li>
        <li onClick={handleMyProfileClick}><FontAwesomeIcon className="iconContent" icon={faUser} /> My Profile</li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <button className='no-margin-btn'><FontAwesomeIcon className="iconContent" icon={faHeadset} />Support</button>
    </div>
  );
};

const SideNav = () => {

  return (
    <div className="side-menu-bar">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default SideNav;

