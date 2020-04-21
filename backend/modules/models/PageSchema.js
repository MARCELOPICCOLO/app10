const mongoose = require('mongoose')
const Schema = mongoose.Schema

  const pageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    bookIn: { type: Schema.Types.ObjectId, ref: 'Books' },
    titlePage:String,
    text:String
  });
  

  module.exports = mongoose.model('Pages', pageSchema)