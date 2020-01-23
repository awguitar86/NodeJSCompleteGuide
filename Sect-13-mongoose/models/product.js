const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', //refer to user model. Same name as User model
    required: true
  }
})

module.exports = mongoose.model('Product', productSchema) //mongoose takes the model name and puts it to lowercase and uses it as the collection name