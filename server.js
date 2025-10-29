
const express = require('express')
const path = require('path')

const port = 10000
const app = express()

app.get("/", (request, response) => {
    try {
        const filePath = path.join(__dirname, 'public', 'index.html')
        response.status(200).sendFile(filePath)
    } catch (error) {
        console.error('Loading Error:', error.message)
        response.sendStatus(400).send('Loading Error')
    }
})

app.listen(port)
console.log(`Server is running on http://localhost:${port}`)