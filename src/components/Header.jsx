import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderLinks from './HeaderLinks';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://www.ruthvandepol.nl/achterkant/wp-content/uploads/2015/09/Linkedin-logo-1-550x550-300x300.png' alt='Linkedin Logo' />

                <div className='header__search'>
                    <SearchIcon />

                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderLinks Icon={HomeIcon} title='Home' />
                <HeaderLinks Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderLinks Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderLinks Icon={ChatIcon} title='Messaging' />
                <HeaderLinks Icon={NotificationsIcon} title='Notifications' />

                <HeaderLinks
                    avatar='https://media-exp1.licdn.com/dms/image/C5603AQGyGy_VURwYlQ/profile-displayphoto-shrink_100_100/0/1558006680236?e=1613606400&v=beta&t=sy-vrOrlrJ8vUBl9aSi4-oS4uCQAMAZGaJyUgcqkcnw'
                    title='Me'
                />
            </div>
        </div>
    );
}

export default Header;