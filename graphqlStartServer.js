const { ApolloServer } = require('apollo-server')

const typeDefs = require('./graphql/typeDefs')

const resolvers = require('./graphql/resolvers/index')

const { NODE_ENV, GRAPHQL_SERVER_PORT } = require('./config/config')

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: NODE_ENV === 'development' ? Boolean('true') : false,
})

module.exports = () => {
  graphqlServer.listen(GRAPHQL_SERVER_PORT)
}
