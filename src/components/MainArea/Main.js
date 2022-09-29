import React from 'react';
import Books from '../Books/Books';
import './Main.css';
import photo from '../../mizan.png';

const Main = () => {

    return (
        <div className='main-container'>
            <h2>Select Reading the B<span style={{ color: '#004D88' }}>o</span><span style={{ color: 'green' }}>o</span>k</h2>
            <div className="activity-area">
                <div className="books-area">
                    <Books></Books>
                </div>
                <div className="personal-area">
                    <h1>Personal Info.</h1>
                    <div className="personal-info">
                        <img src={photo} alt="" />
                        <div className="">
                            <h3>MD. MIZANOR RAHMAN</h3>
                            <p>Tarakanda, Mymensingh</p>
                        </div>
                    </div>
                    <div className="physical-info">
                        <div className="">
                            <h3>80<sub style={{ color: 'gray' }}>kg</sub></h3>
                            <p>Weight</p>
                        </div>
                        <div className="">
                            <h3>6.8</h3>
                            <p>Height</p>
                        </div>
                        <div className="">
                            <h3>22<sub style={{ color: 'gray' }}>yrs</sub></h3>
                            <p>Age</p>
                        </div>
                    </div>
                    <h3 style={{ margin: '20px' }}>Add A Break Time</h3>
                    <div className="break-time">
                        <div>
                            <button className="add-btn">05<sub>min</sub></button>
                        </div>
                        <div >
                            <button className="add-btn">10<sub>min</sub></button>
                        </div>
                        <div>
                            <button className="add-btn">15<sub>min</sub></button>
                        </div>
                    </div>
                    <h3 style={{ margin: '20px' }}>Study Time</h3>
                    <div className="study-time">
                        <div>
                            <h4>Study Time</h4>
                        </div>
                        <div >
                            <p style={{ color: 'gray' }}>{0} minutes</p>
                        </div>
                    </div>
                    <div className="study-time">
                        <div>
                            <h4>Break Time</h4>
                        </div>
                        <div >
                            <p style={{ color: 'gray' }}>{0} minutes</p>
                        </div>
                    </div>
                    <button className='btn-completed'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Main;