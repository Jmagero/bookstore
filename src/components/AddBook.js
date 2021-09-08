import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/bookActions';
import style from './AddBook.module.css';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const newBook = {
    item_id: uuidv4(),
    title,
    category,
  };

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    if (title.trim() && category.trim()) {
      dispatch(postBook(newBook));
      setTitle('');
      setCategory('');
    }
  };

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'category') {
      setCategory(e.target.value);
    }
  };

  return (
    <div>
      <h3 className={style.title}>Add New Book</h3>
      <form className={style.form}>
        <input
          className={style.inputTitle}
          type="text"
          value={title}
          id="title"
          name="title"
          placeholder="Add Title..."
          onChange={(e) => { handleChange(e); }}
        />
        <input
          className={style.inputCategory}
          type="text"
          value={category}
          id="category"
          name="category"
          placeholder="Add category..."
          onChange={(e) => { handleChange(e); }}
        />
        <button type="button" className={style.button} onClick={() => { submitBookToStore(); }}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBooks;
