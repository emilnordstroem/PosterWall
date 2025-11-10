import express from 'express'
import signUpUser from '../controller/signUpController.js'

const router = express.Router()

router.post('/signup', async (request, response) => {
    console.log('Received request.body:', request.body)
    const { username, email, dateOfBirth, password } = request.body
    try {
        const user = await signUpUser(
            username, 
            email, 
            dateOfBirth, 
            password
        )  
        request.session.isUserLoggedIn = true
        request.session.user = user
        response.redirect('/home')
    } catch (error) {
        console.error(`signup error: ${error.message}`)
        response.render('index')
    }
})

export default router