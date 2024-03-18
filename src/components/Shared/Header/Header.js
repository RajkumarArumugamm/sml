import React from 'react';
import '../Header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCloudArrowUp , faBell} from '@fortawesome/free-solid-svg-icons';
import '../SMLTextBox/SMLTextBox';

const SMLHeader = (props) => {
    return (
        <div className="sml-header">
            <div className='navbar-left'>
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>

            </div>
            <div className="navbar-right">
                <FontAwesomeIcon icon={faCloudArrowUp} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
}

export default SMLHeader
