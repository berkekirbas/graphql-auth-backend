const indexRouter = require('./routes/indexRouter')

module.exports = (app) => {
  app.use('/', indexRouter)
}
