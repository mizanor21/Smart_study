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
                <div className="question">
                    <h3>How does react work?</h3>
                    <p><strong>Answer:</strong> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p><br />
                    <h3>What are the differences between props and state ?</h3>
                    <p><strong>Answer:</strong><br />
                        Props: <br /> <li>The Data is passed from one component to another.</li><li>It is Immutable (cannot be modified).</li><li>Props can be used with state and functional components.</li><li>Props are read-only.</li>
                        <br />
                        State: <br /> <li>The Data is passed within the component only.</li><li>IIt is Mutable ( can be modified).</li><li>State can be used only with the state components/class component (Before 16.0).</li><li>State is both read and write.</li></p><br />
                    <h3>Why we use useEffect in react?</h3>
                    <p><strong>Answer:</strong> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
                </div>
            </div>
            <footer style={{ marginTop: '50px', textAlign: 'center' }}>@2022 Smart Study</footer>
        </div>
    );
};

export default Main;