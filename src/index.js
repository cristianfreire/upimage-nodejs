const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
//settings
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))

app.use(require('./routes'))

//handlebars
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//--------------



app.listen(3030)