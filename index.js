import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import signUpRender from './views/controller/signUpController.js'

const app = express()
const port = 10000

app.set('view engine', 'pug')

app.use(morgan('short'))
app.use(express.static('/assets'))

app.use(bodyParser.urlencoded(
    {extended: true} // tilader specialtegn (" ", =, %, ø, ^* osv)
))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    if () {

    }
    response.render('index')
})

app.post('/signup', signUpRender)

app.use((request, response, next) => {
    response.status(404).send('Unknown URL input')
})

app.listen(port, () => console.log(`http://localhost:${port}`))