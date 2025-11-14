import express from 'express'
import logInUserAuthentication from '../controller/logInController.js'

const router = express.Router()

router.post('/login', async (request, response) => {
    const { username, password } = request.body
    try {
        const user = await logInUserAuthentication (
            username,
            password
        )  
        if (user) {
            request.session.isUserLoggedIn = true
            request.session.user = user
        }
        response.send(user)
    } catch (error) {
        console.error(`login error: ${error.message}`)
        response.sendStatus(401)
    }
})

export default router