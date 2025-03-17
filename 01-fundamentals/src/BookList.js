import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              number={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default BookList;