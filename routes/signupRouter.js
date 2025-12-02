import express from 'express'
import { createUser, saveUserToStorage } from '../controller/userController.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.render('signup')
})

router.post('/', async (request, response) => {
    const { username, password } = request.body
    try {
        const user = createUser(null, username, password, [])
        await saveUserToStorage(user)
        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(401)
    }
})

export default router