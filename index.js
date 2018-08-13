'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { WebClient } = require('@slack/client')

const app = express()

const web = new WebClient(process.env.SLACK_TOKEN)

app.set('port', (process.env.PORT || 5004))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))
const httpOrigins = [
  'http://bitpaper.io',
  'http://www.bitpaper.io',
  'http://us.bitpaper.io',
  'http://stage.bitpaper.io',
  'http://127.0.0.1:8081',
  'http://localhost:5001',
  'http://bitpaper-us.herokuapp.com',
  'http://bitpaper-stage.herokuapp.com',
  'http://bitpaper-api.herokuapp.com',
  'http://bitpaper-api-stage.herokuapp.com',
  'http://api.bitpaper.io',
  'http://api-stage.bitpaper.io',
  'http://whiteboard.tutorcruncher.com'
]

const httpsOrigins = httpOrigins.map((item) => {
  return 'https://' + item.substring(7, item.length)
})

app.use(cors({
  credentials: true,
  origin: httpOrigins.concat(httpsOrigins)
}))

app.post('/report/bug', async (req, res) => {
  try {
    await web.chat.postMessage({
       // @NOTE: Send to #bp-bug-reporter channel.
      channel: 'CC8N63UCE',
      // @NOTE: Wrap in backticks so it shows up as a code snippet in Slack.
      text: `\`\`\`${JSON.stringify(req.body, null, 4)}\`\`\``
    })
  } catch(err) {
    console.error(err)
    return res.sendStatus(500)
  }

  res.sendStatus(204)
})

app.listen(app.get('port'), () => {
  console.info(`Success! Listening on: ${app.get('port')}`)
})

module.exports = app
