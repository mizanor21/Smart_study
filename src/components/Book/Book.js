import React from 'react';
import './Book.css'

const Book = (props) => {
    // console.log(props.handleAddStudy);
    const { name, img, study_time, description } = props.book;
    return (
        <div className='book-area'>
            <img src={img} alt="" />
            <div className="book-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <p><small><strong>Study Time:</strong> {study_time} minutes</small></p>
            </div>
            <button onClick={() => { props.handleAddStudy(props.book) }} className='btn-add'>Add to list</button>
        </div>
    );
};

export default Book;