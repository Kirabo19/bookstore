import React from 'react';
import BooksList from '../components/bookList';
import Form from '../components/form';

const BooksPage = () => (
  <>
    <BooksList />
    <hr className="separator_line" />
    <Form />
  </>
);

export default BooksPage;
