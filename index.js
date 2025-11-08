import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'

import signUpRender from './views/controller/signUpController.js'

const app = express()
const port = 10000

app.use(
    session({
        secret: 'user',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
)

app.set('view engine', 'pug')

app.use(morgan('short'))
app.use(express.static('/assets'))

app.use(bodyParser.urlencoded(
    { extended: true } // tilader specialtegn (" ", =, %, ø, ^* osv)
))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    if (request.session.user) {
        response.redirect('/home')
    } else {
        response.render('index')
    }
})

app.post('/signup', signUpRender)

app.get('/home', (request, response) => {
    if (request.session.user) {
        response.render(
            'home',
            { user: request.session.user } 
        )
    } else {
        response.render('index')
    }
})

app.use((request, response, next) => {
    response.status(404).send('Unknown URL input')
})

app.listen(port, () => console.log(`http://localhost:${port}`))