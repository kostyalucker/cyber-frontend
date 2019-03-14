const cors = require('cors')
const express = require('express')

const app = express()
const port = 8080

app.use(cors())
app.listen(port)

require('./routes')(app)
