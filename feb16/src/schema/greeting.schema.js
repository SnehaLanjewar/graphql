const gql = require('graphql-tag');

// greeting is name of query and return string and is not nullable
const typeDefs = gql`
    type Query{
        greeting: String!,
        greetPerson(name: String!): String!,
        greetPersonWay2(name: String!): String!
        sumOfTwoNumbers(num1: Int!, num2: Int!): Int!
    }
`;

module.exports = typeDefs;