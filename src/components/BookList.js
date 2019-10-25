import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {
  // console.log(props)
  const [selected, setSelected] = useState();

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const displayBooks = () => {
    if(loading){
      return( <div> Loading Books... </div>)
    }else{
      return data.books.map(book => {
        return (
          <li key={ book.id } onClick={(e) => {setSelected(book.id)}}>{book.name}</li>
        )
      })
    }
  }
  return (
    <div>
      <ul id="book-list">
        { displayBooks() }
      </ul>
      <BookDetails bookID={selected}/>
    </div>
  );
}

export default BookList;
