import React from 'react';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import SideBar from './components/SideBar';
import Widgets from './components/Widgets';

function App() {
    return (
        <div className='app'>
            <Header />

            <div className='app__left'>
                <SideBar />
            </div>

            <div className='app__center'>
                <Feed />
            </div>

            <div className='app__right'>
                <Widgets />
            </div>
        </div>
    );
}

export default App;
