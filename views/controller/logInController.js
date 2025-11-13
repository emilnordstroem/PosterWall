import controller from './userController.js'

async function logInUserAuthentication (username, password) {
    const users = await controller.readUsers()
    const user = users.find(user => user.username == username)
    if (user && user.password == password) {
        return user
    } else {
        return null
    }
}

export default logInUserAuthentication