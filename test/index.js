'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index.js')

chai.should()
chai.use(chaiHttp)

describe('POST: /report/bug', () => {
  it('sends JSON to a Slack Channel & responds with HTTP 204 status', () => {
    return chai.request(app)
      .put('/report/bug')
      .send({
        foo: 'hello',
        bar: 'world'
      })
      .then(res => {
        res.should.have.status(204)
      })
      .catch(err => {
        throw err
      })
  })
})
