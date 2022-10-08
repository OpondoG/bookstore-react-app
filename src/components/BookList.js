import PropTypes from 'prop-types';
import React from 'react';
import Book from './Books';

const BookList = (props) => {
  const { books } = props;
  return (
    <>
      <ul>
        {books.map(({ id, title, author }) => (
          <Book key={id} id={id} title={title} author={author} />
        ))}
      </ul>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
