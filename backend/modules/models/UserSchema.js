const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    books: [{ type: Schema.Types.ObjectId, ref: 'Books' }]
  });
  
  module.exports = mongoose.model('Users', userSchema)