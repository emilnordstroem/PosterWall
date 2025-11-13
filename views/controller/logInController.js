import controller from './userController.js'
import cryption from 'bcrypt'

async function decryptPassword (unencryptedPassword, encryptedPassword) {
    return await cryption.compare(unencryptedPassword, encryptedPassword)
}

async function logInUserAuthentication (username, password) {
    const users = await controller.readUsers()
    const user = users.find(user => user.username == username)
    if (user && decryptPassword(password, user.password)) {
        return user
    } else {
        return null
    }
}

export default logInUserAuthentication