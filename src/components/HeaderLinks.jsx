import React from 'react';
import '../css/HeaderLinks.css';
import Avatar from '@material-ui/core/Avatar';

function HeaderLinks({Icon, avatar, title}) {
    return (
        <div className='headerLinks'>
            {
                Icon && <Icon className='headerLinks__icon' />
            }

            {
                avatar && <Avatar className='headerLinks__icon' src={avatar} />
            }

            <h3 className='headerLinks__title'>
                {title}
            </h3>
        </div>
    );
}

export default HeaderLinks;