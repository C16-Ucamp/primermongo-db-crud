const mongoose = require('mongoose')

const url = 'mongodb+srv://DaniPM:zTo6gSgeYWUmL5W3@cluster0.3pxgomf.mongodb.net/'

mongoose.connect(url)
.then(()=>{
    console.log('Base de datos MONGODB conectada')
})
.catch((error)=>{
    console.error(error)
})

module.exports = mongoose