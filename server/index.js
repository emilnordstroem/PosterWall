import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import signUpRender from './controller/signUpController.js'

const app = express()
const port = 10000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// middleware - serves only the client (browser)
app.use(morgan('short'))
app.use(express.static(join(__dirname, '..', 'assets')))
// decode post request from client
app.use(bodyParser.urlencoded(
    {extended: true} // tilader specialtegn (" ", =, %, ø, ^* osv)
))
// decode converts body to json
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.redirect('/index.html')
})

app.post('/signup', signUpRender)

app.use((request, response, next) => {
    response.status(404).send('Unknown URL input')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})