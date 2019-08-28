const express = require('express')
const db = require('../db/db.js')
const app = express()
const port = 3000



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


app.get('/api/reviews', (req, res) => {
  db.get.review(req.query.host, (err,data) => {
      if(err) {
          console.log(err)
      }
      console.log(data)
      res.send(data)
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))