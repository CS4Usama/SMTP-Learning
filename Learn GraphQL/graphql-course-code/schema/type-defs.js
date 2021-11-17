const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: String!
    }

    type Query {
        users: [User!]!
    }
`;

module.exports = { typeDefs };
