import React from 'react';
import '../css/Feed.css';
import CreateIcon from '@material-ui/icons/Create';

function Feed() {
    return (
        <div className='feed'>
            <h1>
                FEED
            </h1>

            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />

                    <input type='text' Placeholder='Start a post' />
                </div>
            </div>
        </div>
    );
}

export default Feed;