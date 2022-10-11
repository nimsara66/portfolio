const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './frontend_react/build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './frontend_react/build', 'index.html'))
})

PORT = 4011

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
