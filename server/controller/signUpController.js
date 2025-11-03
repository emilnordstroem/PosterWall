import express from 'express'

import controller from './userController.js'

const router = express.Router()

router.post('/signup', async (request, response) => {
    console.log('Received request.body:', request.body)
    const { username, dateOfBirth } = request.body
    try {
        await signUpUser(username, dateOfBirth)
        response.send('signup succeeded')       
    } catch (error) {
        console.error(`signup error: ${error.message}`)
        response.redirect('/index.html')
    }
})

async function doesUsernameAlreadyExist (username) {
    const users = await controller.readUsers()
    const existingUser = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
    )
    // double negation converts to boolean
    return !!existingUser
}

function isDateOfBirthAllowed (dateOfBirth) {
    const inputDateOfBirth = new Date(dateOfBirth)

    const currentDate = new Date()
    const allowedAge = 13

    const minimumAllowedDateOfBirth = currentDate.setFullYear(
        currentDate.getFullYear() - allowedAge
    )
    
    return inputDateOfBirth <= minimumAllowedDateOfBirth
}

async function signUpUser (username, dateOfBirth) {
    if (!username || !dateOfBirth) {
        throw new Error (`illegal username: ${username} or dateOfBirth: ${dateOfBirth}`) 
    } else if (await doesUsernameAlreadyExist(username)) {
        throw new Error (`username already exist: ${username}`) 
    } else if (!isDateOfBirthAllowed(dateOfBirth)) {
        throw new Error (`date of birth isn't allowed (${dateOfBirth})`) 
    }

    const user = controller.createUser(null, username, dateOfBirth)
    const newUsersList = await controller.addUserToUsers(user)
    await controller.storeUsers(newUsersList)
}

export default router
