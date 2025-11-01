import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import Post from './assets/js/post.js'

// pointer (import.meta.url) to current module file (index.js)
// fileURLToPath function converts url to path
const __filename = fileURLToPath(import.meta.url)
// parent folder of current file (/posterwall)
const __dirname = path.dirname(__filename)

const app = express()
const port = 10000

// middleware - serves only the client (browser)
app.use(express.static('assets'))

async function getPosts () {
    const data = path.join(__dirname, 'posts.json')
    const post = JSON.stringify(data)
    console.log(post)
    return post
}

function getFrontPage () {
    return path.join(__dirname, 'assets', 'html', 'index.html') //.join combines into readable path
}
 
// GET front page
app.get('/', async (request, response) => {
    try {
        const html = getFrontPage()
        response.sendFile(html)
    } catch (error) {
        console.error('Error occured: ', error.message)
        response.send('Loading Error')
    }
})

// POST post
app.post('/', (request, response) => {
    try {
        const text = request.body
        const post = new Post(
            null,
            text
        )
    } catch (error) {
        console.error('Error occured: ', error.message)
        response.send('Add Post Error')
    }
    try {
        const html = getFrontPage()
        response.sendFile(html)
    } catch (error) {
        console.error('Error occured: ', error.message)
        response.send('Loading Error')
    }
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})