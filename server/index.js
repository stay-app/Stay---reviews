const express = require('express')
const db = require('../db/db.js')
const app = express()
const port = 5002



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get('/api/reviews/:host', (req, res) => {
  console.log(req.params.host)
  db.get.review(req.params.host, (err,data) => {
      if(err) {
          console.log(err)
      }
      console.log(data)
      res.send(data)
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))