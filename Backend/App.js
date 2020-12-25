const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routers = require('./routers')
// const errorHendler

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routers)
// app.use(errorHendler)

app.listen(port, () => {
  console.log(`Go to link http://localhost:${port}`)
})

module.exports = app
