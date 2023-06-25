const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    }

    // profile: async (parent, { profileId }) => {
    //   return Profile.findOne({ _id: profileId });
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
    
    //needs review
    saveBook: async (parent, { author, description, title, bookId, image, link }) => {
        return Book.create({ a: BookId });
    },
    removeBook: async (parent, { BookId }) => {
      return Book.findOneAndDelete({ BookId: BookId });
    }
  },
};

module.exports = resolvers;
