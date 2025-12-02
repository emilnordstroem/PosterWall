import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import fs from 'fs/promises'

const app = express()
const port = 10000

const secret = await fs.readFile('./secret.txt', 'utf-8')

app.use(
    session(
        {
        secret: secret,
        resave: false,
        saveUninitialized: false,
      }
    )
)

app.set('view engine', 'pug')

app.use(morgan('short'))
app.use(express.static('assets'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const requireAuth = (request, response, next) => {
    if (request.session.userId) {
      next();
    } else {
      response.redirect("/signin");
    }
}

import signinRouter from './routes/signinRouter.js'
import signupRouter from './routes/signupRouter.js'
import posterwallRouter from './routes/posterwallRouter.js'

app.use('/signin', signinRouter)
app.use('/signup', signupRouter)
app.use(requireAuth)
app.use('/posterwall', posterwallRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})