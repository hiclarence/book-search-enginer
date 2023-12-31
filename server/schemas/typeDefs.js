const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input NewBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}

  type Query {
    me: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(newBook: NewBook!): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
