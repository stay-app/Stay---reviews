const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const express = require('express')
const db = require('../db/db.js')
const app = express()
const port = 5002
const cors = require('cors')

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use('/:listing/', express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/api/reviews', (req, res)=>{
  db.get.review(req.query.host, (err,data) => {
      if(err) {
          console.log(err)
          res.status = 400
      } else {
        res.status = 5002
        res.send(data)
      }
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))