const mongoose = require('mongoose')
require('dotenv').config(); 

const url = `mongodb+srv://${process.env.DB_PASSWORD}@cluster0.3pxgomf.mongodb.net/`

mongoose.connect(url)
.then(()=>{
    console.log('Base de datos MONGODB conectada')
})
.catch((error)=>{
    console.error(error)
})

module.exports = mongoose