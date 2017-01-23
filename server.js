const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())

var db
MongoClient.connect('mongodb://ksven711:5tgbhu8@ds127429.mlab.com:27429/thoughtdump', (err, database) => {
    if (err) return console.log(err)
      db = database
      app.listen(3000, () => {
        console.log('listening on 3000')
      })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  db.collection('thoughts').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {thoughts: result})
  })
})

app.post('/thoughts', (req, res) => {
  db.collection('thoughts').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/thoughts', (req, res) => {
  db.collection('thoughts')
  .findOneAndUpdate({thought: '4000DP'}, {
    $set: {
      thought: req.body.thought,
      content: req.body.content
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})


