import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorID: ID!){
        addBook(name: $name, genre: $genre, authorID: $authorID){
            name
            genre
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation AddAuthor($name: String!, $age: Int!){
        addAuthor(name: $name, age: $age){
            name
            age
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
      book(id: $id){
        id
        name
        genre
        author {
          id
          name
          age
          books {
            name
            id
          }
        }
      }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, addAuthorMutation, getBookQuery };