const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {bookController} = require('../controllers')
const {getbook, createBook, updatebook, removeBook} = bookController

router.get('/', async(req,res)=>{
console.log('get')
const books = await getbook()
res.send(books)
})

router.post('/', async(req,res)=>{
    const body = req.body
    const newBook = await createBook(body)
    res.send(newBook)
})

router.put('/:id',async(req,res)=>{
    const {id} = req.params
    const body = req.body

    const books = await updatebook(id, body)
    if(!books){
        res.status(404)
        return res.send({
            message: `Libro ${id} no encontrado`
        })
    }
    res.send(books)
})

router.delete('/:id', async(req,res) =>{
    const {id} = req.params
    const result = await removeBook(id)
    res.send(result)
})
module.exports = router