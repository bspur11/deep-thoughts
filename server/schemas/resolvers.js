const { User, Thought } =require('../models');


const resolvers = {
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
  }
};

module.exports = resolvers;


// Resolvers: `Resolvers` are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform.