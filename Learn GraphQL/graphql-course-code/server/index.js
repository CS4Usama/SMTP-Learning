const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers,
    // context: ({req}) => { return {req} }
    context: () => { return {name: 'USAMA'} }
});

server.listen().then(({ url }) => {
    console.log(`SERVER IS RUNNING AT ${url}`);
});
