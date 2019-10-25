import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery  } from '../queries/queries';

const AddBook = (props) => {

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorID, setAuthorID] = useState('');

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [ addBook, { loading: mutationLoading, error: mutationError} ] = useMutation(addBookMutation);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const displayAuthors = () => {
    if(loading){
      return( <option disabled>Loading Authors...</option> );
    }else{
      return data.authors.map(author => {
        return( <option key={author.id} value={author.id}>{ author.name }</option>);
      });
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = await addBook({ variables: {name, genre, authorID}, refetchQueries:[{query: getBooksQuery}]});
  }

  return (
    <form id="add-book" onSubmit={onSubmit}>
      <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={ (e) => setName(e.target.value)}/>
      </div>
      <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={ (e) => setGenre(e.target.value)}/>
      </div>
      <div className="field">
          <label>Author:</label>
          <select onChange={ (e) => setAuthorID(e.target.value)}>
              <option>Select author</option>
              { displayAuthors() }
          </select>
      </div>
      <button>Add Book</button>
    </form>
  );
}

export default AddBook;

