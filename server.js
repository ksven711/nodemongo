const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')

var db
MongoClient.connect('mongo url', (err, database) => {
    if (err) return console.log(err)
      db = database
      app.listen(3000, () => {
        console.log('listening on 3000')
      })
})

app.use(bodyParser.urlencoded({extended: true}))

//app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index.html')
//})

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

