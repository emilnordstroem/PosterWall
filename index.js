import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

// pointer (import.meta.url) to current module file (index.js)
// fileURLToPath function converts url to path
const __filename = fileURLToPath(import.meta.url)
// parent folder of current file (/posterwall)
const __dirname = path.dirname(__filename)

const app = express()
const port = 10000

// middleware - serves only the client (browser)
app.use(express.static('assets'))

function getHTML () {
    return path.join(__dirname, 'assets', 'index.html') //.join combines into readable path
}
 
// GET html file
app.get('/', async (request, response) => {
    try {
        const html = getHTML()
        response.sendFile(html)
    } catch (error) {
        console.error('Error occured: ', error.message)
        response.send('Loading Error')
    }
})







app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})