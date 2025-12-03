import express from 'express'
import { readUsers } from '../controller/userController.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.render('signin')
})

router.post('/', async (request, response) => {
    const { username, password } = request.body
    if (!username || !password) {
        response.sendStatus(404)
    }

    try {
        const users = await readUsers()
        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            request.session.userId = user.id
            request.session.username = user.username
            request.session.subscriptions = user.subscriptions
            
            response.sendStatus(200)
        } else {
            response.sendStatus(401)
        }
    } catch (error) {
        console.error(error)
        response.sendStatus(401)
    }
})

export default router