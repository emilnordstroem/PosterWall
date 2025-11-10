import controller from './userController.js'

async function logInUserAuthentication (username, password) {
    const users = await controller.readUsers()
    return controller.findUserBasedOnUsername(username, password, users)
}

export default logInUserAuthentication