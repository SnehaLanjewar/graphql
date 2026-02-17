const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        email: String!
        role: String!
        hashed_password: String!
        salt: String!
    }
    type Query {
        user(email: String!): User
        users: [User]
    }
    input UserInput {
        email: String!
        password: String!
        role: String
    }
    type Mutation {
        signUp(input: UserInput!): User
    }`);

module.exports = schema;    