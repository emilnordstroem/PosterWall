import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'

import logInRouter from './views/routes/logInRouter.js'
import signUpRouter from './views/routes/signUpRouter.js'

const app = express()
const port = 10000

app.use(
    session({
        secret: 'dummySession',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, 
            secure: false 
        }
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
    if (request.session.isUserLoggedIn) {
        response.redirect('/home')
    } else {
        response.render('index')
    }
})

app.post('/login', logInRouter)
app.post('/signup', signUpRouter)


app.get('/home', (request, response) => {
    if (request.session.isUserLoggedIn) {
        response.render(
            'home',
            { user: request.session.user.username } 
        )
    } else {
        response.render('index')
    }
})

app.use((request, response, next) => {
    response.status(404).send('Unknown URL input')
})

app.listen(port, () => console.log(`http://localhost:${port}`))