import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { addAuthorMutation, getAuthorsQuery } from '../queries/queries';

const AddAuthor = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [ addAuthor, { loading, error } ] = useMutation(addAuthorMutation);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('in submit')
    console.log(name, age)
    let data = await addAuthor({ variables: {name, age}, refetchQueries:[{query: getAuthorsQuery}]});
  }

  return (
    <form id="add-author" onSubmit={onSubmit}>
      <div className="field">
          <label>Name:</label>
          <input type="text" onChange={ (e) => setName(e.target.value)}/>
      </div>
      <div className="field">
          <label>Age:</label>
          <input type="text" onChange={ (e) => setAge(Number(e.target.value))}/>
      </div>
      <button>Add Author</button>
    </form>
  );
}

export default AddAuthor;