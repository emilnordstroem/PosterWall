import User from '../model/user.js'

function createUser (id, username, dateOfBirth) {
    if (username == null || dateOfBirth == null) {
        throw new error (`Illegal username: ${username} or dateofbirth: ${dateOfBirth}`) 
    }
    const user = new User(id, username, dateOfBirth)
    return user
}

function readUsers () {
    // TODO - read users and return relevant values to client
}
