import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([])
    const [addList, setAddList] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    const handleAddStudy = (book) => {
        const newAddList = [...addList, book];
        setAddList(newAddList);
    }
    return (
        <div className='books-container'>

            {
                books.map(book => <Book book={book} handleAddStudy={handleAddStudy} key={book.id}></Book>)
            }
        </div>
    );
};

export default Books;