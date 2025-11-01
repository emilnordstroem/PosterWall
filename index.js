import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 10000

// middleware - serves only the client (browser)
app.use(express.static('assets'))


app.get('/', async (request, response) => {
    try {
        const html = path.join(__dirname, 'assets', 'html', 'index.html')
        response.sendFile(html)
    } catch (error) {
        console.error('Error occured: ', error.message)
        response.send('Loading Error')
    }
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})