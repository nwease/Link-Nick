import React from 'react';
import '../css/SideBar.css';
import Avatar from '@material-ui/core/Avatar';

function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBar__top'>
                <Avatar />

                <h2>
                    Nicholas Wease
                </h2>

                <h4>
                    Full Stack Web Developer
                </h4>
            </div>

            <div className='sideBar__stats'>
                <p>
                    Who viewed your profile
                </p>

                <p className='sideBar__statsNumber'>
                    31
                </p>
            </div>

            <div className='sideBar__stats'>
                <p>
                    Views of your post
                </p>

                <p className='sideBar__statsNumber'>
                    216
                </p>
            </div>
        </div>
    );
}

export default SideBar;