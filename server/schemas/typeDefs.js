const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
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

    saveBook(author: [String]!, description: String!, title: String!, bookId: String!, image: String!, link: 
        String!): User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
