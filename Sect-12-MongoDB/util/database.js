const mongodb = require('../node_modules/mongodb')
const MongoClient = mongodb.MongoClient

let _db 

const mongoConnect = callback => {
  MongoClient
    .connect('mongodb+srv://austinwright:OntarioCA0810@cluster0-csn2d.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected')
      _db = client.db()
      callback()
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}

const getDb = () => {
  if(_db) {
    return _db
  }
  throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb