import express from 'express'

const app = express()
const port = 8000

app.get('/', (request, response) => {
    response.send('GET request to the home page')
})

app.post('/', (request, response) => {
    response.send('POST request to the home page')
})

app.listen(port)
