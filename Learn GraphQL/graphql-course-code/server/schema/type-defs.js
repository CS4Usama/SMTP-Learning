const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie!
    }


    input CreateUserInput {
        name: String!
        userName: String!
        # age: Int = 18
        age: Int!
        nationality: Nationality = PAKISTAN
    }
    input UpdateUserNameInput {
        id: ID!
        newUserName: String!
    }

    type Mutation {
        # createUser(user: User!): User!    If we use this, then we don't need input. But its drawback is that we can't modify or change our inputs like making it optional or giving some default values.
        createUser(input: CreateUserInput!): User
        updateUserName(input: UpdateUserNameInput!): User
        # Don't need to make delete input logic because it has only one argument which is the user ID.
        deleteUser(id: ID!): User
    }

    enum Nationality {
        PAKISTAN
        USA
        TURKEY
        CANADA
        AUSTRALIA
    }
`;

module.exports = { typeDefs };
