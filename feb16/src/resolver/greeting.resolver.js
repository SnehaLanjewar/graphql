const resolvers = {
    Query: {
        greeting: () => 'Welcome to GraphQL learning!',
        greetPerson: (_, { name }) => `Hello ${name}! Welcome to GraphQL.`,
        greetPersonWay2: (_, args) => {
            const { name } = args;
            return `Hello ${name}! Welcome to GraphQL.`;
        },
        sumOfTwoNumbers: (_, { num1, num2 }) => num1 + num2
    }
}

module.exports = resolvers;