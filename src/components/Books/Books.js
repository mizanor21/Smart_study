import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div className='books-container'>

            {
                books.map(book => <Book book={book} key={book.id}></Book>)
            }
        </div>
    );
};

export default Books;