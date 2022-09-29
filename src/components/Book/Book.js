import React from 'react';
import './Book.css'

const Book = ({ book }) => {
    const { name, img, study_time, description } = book;
    return (
        <div className='book-area'>
            <img src={img} alt="" />
            <div className="book-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <p><small><strong>Study Time:</strong> {study_time} minutes</small></p>
            </div>
            <button className='btn-add'>Add to list</button>
        </div>
    );
};

export default Book;