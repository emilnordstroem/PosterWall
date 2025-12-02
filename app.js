import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import fs from 'fs/promises'

const app = express()
const port = 10000

const secret = await fs.readFile('./secret.txt')

app.use(
    session({
        secret: secret,
        resave: false,
        saveUninitialized: false,
    })
)

app.set('view engine', 'pug')

app.use(morgan('short'))
app.use(express.static('assets'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})