const express = require('express')
const app = express()

// Set port
const port = 3000

// Router
app.use(require('./routes'))

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
