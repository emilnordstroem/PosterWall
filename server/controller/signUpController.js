import express from 'express'


const router = express.Router()


router.post('/signup', async (request, response) => {
    console.log('Received request.body:', request.body)
    const { username, dateOfBirth } = request.body
    try {
        await userController.signUpUser(username, dateOfBirth)
        response.send('signup succeeded')       
    } catch (error) {
        console.error(`signup error: ${error.message}`)
        response.sendFile(getHTML())
    }
})



export default router
