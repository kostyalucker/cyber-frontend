const http = require('http')
const SSE = require('sse')

const port = 4000

function onDigits(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  })

  let i = 0
  const timer = setInterval(write, 4000)

  function write() {
    i += 1

    if (i === 4) {
      res.write('event: bye\ndata: до свидания\n\n')
      clearInterval(timer)
      res.end()
      return
    }

    res.write(`data: ${i}\n\n`)
  }

  write()
}

function accept(req, res) {
  onDigits(req, res)
}

const server = http.createServer(accept)

server.listen(port, err => {
  if (err) {
    console.log(err)
  }

  const sse = new SSE(server)
  sse.on('connection', function(client) {
    client.send('hi')
  })

  console.log(`you on port ${port}`)
})
