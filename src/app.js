const path = require('path')
const express = require('express')
const hbs = require('hbs')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Principal',
        author: 'Victor'
    })
})

app.get('/about', (req, res  ) => {
    res.render('about', {
        title: 'Sobre',
        author: 'Victor'
    })
})

app.listen('3000', () =>  {
    console.log('Listening on 3000')
})