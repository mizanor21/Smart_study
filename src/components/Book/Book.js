import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, img, study_time, description } = props.book;
    return (
        <div className='book-area'>
            <img src={img} alt="" />
            <div className="book-info">
                <h3>{name}</h3>
                <p style={{ color: 'gray', fontSize: '17px' }}>{description}</p>
                <p><small><strong>Study Time:</strong> {study_time} minutes</small></p>
            </div>
            <button onClick={() => props.handleAddStudy(props.book)} className='btn-add'>Add Study</button>
        </div>
    );
};

export default Book;