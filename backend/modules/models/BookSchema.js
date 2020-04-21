const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title:{
        type: String,
    },
    desc:{
        type: String,
    },
    dateAt:{
        type: Date,
        default: Date.now()
    },
    idUser:{type: Schema.Types.ObjectId, ref: 'Users'},
    pages:[{type: Schema.Types.ObjectId, ref: 'Pages'}]
})

module.exports = mongoose.model('Books', bookSchema)