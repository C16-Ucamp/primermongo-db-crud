const express = require('express')
const router = express.Router()

const booksRouter = require('./collection')

router.use('/books', booksRouter)
module.exports = router