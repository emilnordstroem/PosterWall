import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import fs from 'fs/promises'

import homeRouter from './views/routes/homeRouter.js'
import logInRouter from './views/routes/logInRouter.js'
import signUpRouter from './views/routes/signUpRouter.js'

const app = express()
const port = 10000

app.use(
    session({
        secret: await fs.readFile('./secret.txt', 'utf-8'),
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
app.use(express.static('assets'))

app.use(bodyParser.urlencoded(
    { extended: true } // tilader specialtegn (" ", =, %, ø, ^* osv) i HTTP body
))
app.use(bodyParser.json())


app.get('/', homeRouter)

app.post('/login', logInRouter)

app.post('/signup', signUpRouter)

app.get('/home', homeRouter)

app.get('/logout', homeRouter)


app.use((request, response, next) => {
    response.status(404).send('Unknown URL input')
})


app.listen(port, () => console.log(`http://localhost:${port}`))