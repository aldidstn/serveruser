const jwt = require('jsonwebtoken')

function generateToken(value) {
  return jwt.sign(value, process.env.SECRET || "server")
}

function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET || "server")
}

module.exports = { generateToken, verifyToken }