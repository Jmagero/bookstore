/* eslint-disable */
import React,{ useState }from "react";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/books/books";
import { useDispatch } from 'react-redux';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
    }
    const dispatch = useDispatch();

    const submitBookToStore = () => {
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }

    const handleChange = e => {
        if (e.target.id === "title") {
          setTitle(e.target.value)
        } else if(e.target.id === "author"){
          setAuthor(e.target.value)
        }
    }

    return (
    <React.Fragment>
      <form>
          <input 
            type="text" 
            value={title} 
            id="title"
            name="title" 
            placeholder="Add Title..."
            onChange={(e) => {handleChange(e)}} 
            />
          <input 
            type="text" 
            value={author}
            id="author"
            name="author" 
            placeholder="Add Author..."
            onChange={(e) => {handleChange(e)}} 
            />
          <button type="button"onClick={() => { submitBookToStore(); }}>Submit</button>
        </form>
    </React.Fragment>
    )
};
  
  export default AddBooks;