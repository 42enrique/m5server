const express = require('express')
const app = express()
const port = 3000

app.get('/time', (req, res) => {
  res.send(new Date().toTimeString().split(" ")[0])
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})