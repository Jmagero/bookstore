import AddBook  from "./AddBook";
import DisplayBook from "./DisplayBooks";
const Book = () => (
  <div>
    <h3>BOOKS</h3>
    <ul>
      <DisplayBook />
    </ul>
    <AddBook />
  </div>
);

export default Book;
