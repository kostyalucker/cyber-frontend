const uuid = require('uuid')
const EventEmitter = require('events')
const getMatches = require('../scrape')

const emitter = new EventEmitter()
const state = {
  likes: 10,
  comments: 3,
  matches: null
}
const intervalTime = 30000

function routes(app) {
  app.get('/sse', (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    })

    const listener = (event, data) => {
      res.write(`id: ${uuid.v4()}\n`)
      res.write(`event: ${event}\n`)
      res.write(`data: ${JSON.stringify(data)}\n\n`)
    }

    emitter.addListener('push', listener)

    req.on('close', () => {
      emitter.removeListener('push', listener)
    })
  })

  // interval for emit push data matches
  async function sendData() {
    await getMatches.then(res => {
      state.matches = res
    })
    await emitter.emit('push', 'matches', {
      value: state.matches
    })
  }

  sendData()

  setInterval(() => {
    sendData()
  }, intervalTime)

  app.get('/matches', async (req, res) => {
    await getMatches.then(matches => {
      res.send(matches)
    })
  })
}

module.exports = routes
