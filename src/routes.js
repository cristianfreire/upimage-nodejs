const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post('/posts', multer(multerConfig).single('imgProd'), (req,res) =>{
    console.log(req.file)

    res.json({hello: 'World'})
    //res.send("Imagem enviada com sucesso!")
})

routes.get('/imgAdd', (req,res) =>{
    res.render('addImagem')
})

module.exports = routes