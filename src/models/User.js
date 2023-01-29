const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  apelido: String,
  email: String,
  telefone: Number,
  password: String,
})

module.exports = User
