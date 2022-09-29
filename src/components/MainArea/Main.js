import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Main.css';
import photo from '../../mizan.png';
import Book from '../Book/Book';

const Main = () => {
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() => {
        const localstorageData = localStorage.getItem('BreakTime');
        setBreakTime(localstorageData);
    }, [])
    const handleBreak = (time) => {
        localStorage.setItem('BreakTime', time);
        setBreakTime(time);
    }
    const notify = () => {
        toast("Successfully Completed!")
    };




    const [books, setBooks] = useState([])
    const [addStudyTime, setStudyTime] = useState([0])
    let oldStudyTime = 0;
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    const handleAddStudy = (book) => {
        const newAddStudyTime = book.study_time + oldStudyTime;
        setStudyTime(+addStudyTime + newAddStudyTime);
        // console.log(book.study_time);
    }
    return (

        <div className='main-container'>
            <h2>Select Reading the B<span style={{ color: '#004D88' }}>o</span><span style={{ color: 'green' }}>o</span>k</h2>
            <div className="activity-area">
                <div className="books-area">
                    <div className="books-container">
                        {
                            books.map(book => <Book book={book} handleAddStudy={handleAddStudy} key={book.id}></Book>)
                        }
                    </div>
                </div>
                <div className="personal-area">
                    <h1><span style={{ color: 'green' }}>Personal Info.</span></h1>
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
                            <button onClick={() => handleBreak(5)} className="add-btn">05<sub>min</sub></button>
                        </div>
                        <div >
                            <button onClick={() => handleBreak(10)} className="add-btn">10<sub>min</sub></button>
                        </div>
                        <div>
                            <button onClick={() => handleBreak(15)} className="add-btn">15<sub>min</sub></button>
                        </div>
                        <div>
                            <button onClick={() => handleBreak(30)} className="add-btn">30<sub>min</sub></button>
                        </div>
                    </div>
                    <h3 style={{ margin: '20px' }}>Study Time</h3>
                    <div className="study-time">
                        <div>
                            <h4>Study Time</h4>
                        </div>
                        <div >
                            <p style={{ color: 'gray' }}>{addStudyTime} minutes</p>
                        </div>
                    </div>
                    <div className="study-time">
                        <div>
                            <h4>Break Time</h4>
                        </div>
                        <div >
                            <p style={{ color: 'gray' }}>{breakTime} minutes</p>
                        </div>
                    </div>
                    <button onClick={notify} className='btn-completed'>Activity Completed</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <div className="question-part">
                <h2>Frequently Asked Questions</h2>
            </div>
        </div>
    );
};

export default Main;