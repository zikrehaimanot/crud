// console.log('May Node be with you')
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://resilientcoders:bossox94@potter-quotes-g61rv.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var db

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('potter-quotes')
  app.listen(4001, () => {
    // console.log('listening on 4000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.listen(4001, function() {
  // console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')

})
app.post('/quotes', (req, res) => {
  db.collection('quotes').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)
    // console.log('saved to database')
    res.redirect('/')
  })
})



// app.post('/quotes', (req, res) => {
//   db.collection('quotes').insertOne(req.body, (err, result) => {
//     if (err) return console.log(err)
//
//     console.log('saved to database')
//     res.redirect('/')
//   })
// })
//
// var db
//
// MongoClient.connect( `"mongo "mongodb+srv://star-wars-quotes-mgfzj.mongodb.net/test" --username resilientcoders"`, (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('star-wars-quotes') // whatever your database name is
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//   })
// })
