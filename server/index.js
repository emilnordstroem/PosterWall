import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import userController from './controller/userController'

// pointer (import.meta.url) to current module file (index.js)
// fileURLToPath function converts url to path
const __filename = fileURLToPath(import.meta.url)
// parent folder of current file (/server)
const __dirname = path.dirname(__filename)

const app = express()
const port = 10000

// middleware - serves only the client (browser)
app.use(express.static('../assets'))

function getHTML () {
    return path.join(__dirname, 'view', 'index.html') //.join combines into readable path
}
 
// GET html file
app.get('/', async (request, response) => {
    try {
        response.sendFile(getHTML())
    } catch (error) {
        console.error('Error occured: ', error.message)
        response.send('Loading Error')
    }
})

// POST on sign in
app.post('/signin', (request, response) => userController.signInUser(request, response))

// POST on sign up
app.post('/signup', (request, response) => userController.signUpUser(request, response))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})