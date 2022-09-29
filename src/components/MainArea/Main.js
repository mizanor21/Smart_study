import React from 'react';
import Books from '../Books/Books';
import './Main.css';

const Main = () => {
    return (
        <div className='main-container'>
            <h2>Select Reading the B<span style={{ color: '#004D88' }}>o</span><span style={{ color: 'green' }}>o</span>k</h2>
            <div className="activity-area">
                <div className="books-area">
                    <Books></Books>
                </div>
                <div className="personal-area">
                    <h1>this is personal info area</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;