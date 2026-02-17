const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Trainee {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    age: Int
    skills: [String]
    joinedAt: String
    isActive: Boolean
    notes: String
  }

  input CreateTraineeInput {
    firstName: String!
    lastName: String!
    email: String!
    age: Int
    skills: [String]
    notes: String
  }

  type Query {
    trainees: [Trainee]
    traineeByEmail(email: String!): Trainee
  }

  type Mutation {
    createTrainee(input: CreateTraineeInput!): Trainee
  }
`);

module.exports = schema;