# graphql

## Overview

A GraphQL implementation with support for queries, mutations, and subscriptions.

## Getting Started

### Installation

```bash
npm install graphql
```

### Basic Usage

```javascript
const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const rootValue = {
    hello: () => 'Hello, World!'
};

graphql(schema, '{ hello }', rootValue).then(result => {
    console.log(result);
});
```

```json
### User example
mutation SignUp($email: String!, $password: String!, $role: String) {
  signUp(input: { email: $email, password: $password, role: $role }) {
    email
    role
    hashed_password
    salt
  }
}

query GetUser($email: String!) {
  user(email: $email) {
    email
    role
    hashed_password
    salt
  }
}

query Query {
  users {
    email
    role
  }
}
```
## Documentation

For more information, see the [official GraphQL documentation](https://graphql.org/learn/).