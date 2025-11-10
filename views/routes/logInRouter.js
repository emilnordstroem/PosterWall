import express from 'express'
import logInUserAuthentication from '../controller/logInController.js'

const router = express.Router()

router.post('/login', async (request, response) => {
    console.log('Received request.body:', request.body)
    const { username, password } = request.body
    try {
        const user = await logInUserAuthentication (
            username,
            password
        )  
        if (user) {
            request.session.isUserLoggedIn = true
            request.session.user = user
            response.redirect('/home')
        }
        response.redirect('/index')
    } catch (error) {
        console.error(`log in error: ${error.message}`)
        response.render('index')
    }
})

export default router