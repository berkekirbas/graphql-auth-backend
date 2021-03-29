const express = require('express')

const app = express()

const initializeMiddlewares = require('./middlewares')

const initializeRoutes = require('./routes')

const mongoDBConnection = require('./mongoDBConnection')

const graphqlServerStart = require('./graphqlStartServer')

// initialize middlewares
initializeMiddlewares(app)

// initalize routes
initializeRoutes(app)

// mongodb connection
mongoDBConnection()

// start graphql server
graphqlServerStart()

module.exports = app
