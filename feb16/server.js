const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone')
const PORT = 5000;
const typeDefs = require('./src/schema/greeting.schema')
const resolvers = require('./src/resolver/greeting.resolver')

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {

    try {
        await startStandaloneServer(server, { listen: { port: PORT } });
        console.log('Server running on port 5000')
    } catch (error) {
        console.log(error)
    }
})();