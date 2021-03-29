const mongoose = require('mongoose')

const { MONGODB_SERVER_ADRESS } = require('./config/config')

module.exports = () => {
  mongoose
    .connect(MONGODB_SERVER_ADRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
      console.error(err)
      process.exit(0)
    })
}
