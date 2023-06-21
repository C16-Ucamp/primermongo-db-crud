const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    titulo:{
        type: String,
        required:true
    },
    autor:{
        type: String,
        required: true
    },
    año:{
        type: Number,
        required: true
    }
})

const bookModel = mongoose.model('colection', bookSchema)


module.exports = bookModel