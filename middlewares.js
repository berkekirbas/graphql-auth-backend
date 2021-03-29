const express = require('express')

const logger = require('morgan')

const fs = require('fs')

const config = require('./config/config')

module.exports = (app) => {
  // App settings
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Logger Settings
  if (config.NODE_ENV === 'production') {
    const accessLogStream = fs.createWriteStream(
      `${__dirname}/logs/server.log`,
      { flags: 'a' }
    )
    app.use(logger('combined', { stream: accessLogStream }))
  } else {
    app.use(logger('dev')) // log to console on development
  }

  // Error Handlers
  if (config.NODE_ENV === 'development') {
    // Development Event Handler
    app.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.render('error', {
        message: err.message,
        error: err,
      })
    })
  } else {
    // production error handler
    // no stacktraces leaked to user
    app.use((err, req, res, next) => {
      res.status(err.status || 500)
      next(err)
      res.render('error', {
        message: err.message,
        error: {},
      })
    })
  }
}

/* // create error
  app.use((req, res, next) => {
    next(createError(404))
  }) */
