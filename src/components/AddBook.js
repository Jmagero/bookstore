/* eslint-disable */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

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
    dispatch(postBook(newBook));
    setTitle('');
    setCategory('');
  };

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'category') {
      setCategory(e.target.value);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={title}
          id="title"
          name="title"
          placeholder="Add Title..."
          onChange={(e) => { handleChange(e); }}
        />
        <input
          type="text"
          value={category}
          id="category"
          name="category"
          placeholder="Add category..."
          onChange={(e) => { handleChange(e); }}
        />
        <button type="button" onClick={() => { submitBookToStore(); }}>Submit</button>
      </form>
    </>
  );
};

export default AddBooks;
