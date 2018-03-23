'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))
app.set('port', (process.env.PORT || 5004))

// body


// end body

app.listen(app.get('port'), () => {
  console.info(`Success! Listening on: ${app.get('port')}`)
})

module.exports = app
