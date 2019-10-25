import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {

  const id = props.bookID;

  const { data, loading, error } = useQuery(getBookQuery, { variables: {id} });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const DisplayBookDetails = () => {
    
    if(data.book){
      return (
        <div>
          <h2>Title: {data.book.name}</h2>
          <h2>Genre: {data.book.genre}</h2>
          <h2>Author: {data.book.author.name}</h2>
          <h2>Author's Age: {data.book.author.age}</h2>
          <h2>Other Books: {data.book.author.books.map(book => <ul><li key={book.id}>{book.name}</li></ul>)}</h2>
        </div>
          )
    }else{
      return( <div> Click a book above to display its details </div>)
      }
    }

  return (
    <div id="book-details">
      <DisplayBookDetails />
    </div>
  );
}

export default BookDetails;