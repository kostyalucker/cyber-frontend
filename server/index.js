const EventEmitter = require('events')
const cors = require('cors')
const uuid = require('uuid')
const express = require('express')
const getMatches = require('./scrape')
const saveFile = require('./save')

const server = express()
const emitter = new EventEmitter()

server.use(cors())

const state = {
  likes: 10,
  comments: 3,
  matches: null
}

server.get('/sse', (req, res) => {
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

server.get('/matches', async (req, res) => {
  await getMatches.then(matches => {
    res.send(matches)
  })
  saveFile()
})

server.listen(8080)

const intervalTime = 300000

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
