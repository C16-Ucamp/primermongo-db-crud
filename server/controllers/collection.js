const bookModel = require('../model/collection')

const getbook = async() =>{
    console.log(bookModel)
    return bookModel.find({})
    
}

const createBook = async(body) =>{
    const newBook = new bookModel(body)
    await newBook.save()

    return newBook
}

const updatebook = async(_id, updatebook) =>{
    return bookModel.findOneAndUpdate({ _id }, updatebook, {
        upsert: true,
        new: true
    } )
}

const removeBook = async(_id) =>{
    return bookModel.findByIdAndRemove({_id})
}


module.exports = {getbook, createBook,updatebook, removeBook}