import controller from './userController.js'

function isDateOfBirthAllowed (dateOfBirth) {
    const inputDateOfBirth = new Date(dateOfBirth)

    const currentDate = new Date()
    const allowedAge = 13

    const minimumAllowedDateOfBirth = currentDate.setFullYear(
        currentDate.getFullYear() - allowedAge
    )
    
    return inputDateOfBirth <= minimumAllowedDateOfBirth
}

async function signUpUser (username, email, dateOfBirth, password) {
    const users = await controller.readUsers()
    
    if (!username || !email || !dateOfBirth || !password) {
        throw new Error (`illegal username: ${username}, email: ${email}, dateOfBirth: ${dateOfBirth}, or password: ${password}`) 
    } else if (await controller.doesUsernameAlreadyExist(username, users)) {
        throw new Error (`username already exist: ${username}`) 
    } else if (await controller.doesEmailAlreadyExist(email, users)) {
        throw new Error (`email already exist: ${email}`)
    } else if (!isDateOfBirthAllowed(dateOfBirth)) {
        throw new Error (`date of birth isn't allowed (${dateOfBirth})`) 
    }

    const user = controller.createUser(null, username, email, dateOfBirth, password)
    const newUsersList = await controller.addUserToUsers(user)
    await controller.storeUsers(newUsersList)

    return user
}

export default signUpUser