import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <div id="Main">
        <h1>Jeff's Reading List</h1>
        <BookList />
        <h2>Add a new book</h2>
        <AddBook />
        <h2>Add a new Author</h2>
        <AddAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;
