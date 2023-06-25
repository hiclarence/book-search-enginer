const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
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
    removeBook: async (parent, { BookId }) => {
      return Profile.findOneAndDelete({ BookId: BookId });
    },
  },
};

module.exports = resolvers;
