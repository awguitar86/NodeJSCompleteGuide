const express = require('express')

const app = express()

app.use('/users', (req, res) => {
  console.log('This is the users')
  res.send('<h1>Hello Users!</h1>')
})

app.use('/', (req, res) => {
  console.log('This is the Slash')
  res.send('<h1>Slash!</h1>')
})

app.listen(3000, () => {
  console.log('=================================\nServer is listening on port 3000\n=================================')
})