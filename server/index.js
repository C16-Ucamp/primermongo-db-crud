const express = require('express')
const cors = require('cors')
const app =  express()
const router = require('./apis')
require('./db/mongodb')

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hola mundo, estoy vivo')
})

app.use(router)
const PORT = 5002
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})