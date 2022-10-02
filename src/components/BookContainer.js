import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const BookContainer = () => {
  const books = [
    {
      id: 1,
      title:'I love everything about you',
      author: 'Mamyta Wairimu',
    },
    {
      id: 2,
      title: 'Our friendship is cool',
      author: 'Mad Cobra',
    },
    {
      id: 3,
      title: 'Relationship issues come true',
      author: 'Gilbert the Guy',
    },

  ];

  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
