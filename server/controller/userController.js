import User from '../model/user.js'

function signUpUser (request, response) {
    // TODO
}

function signInUser (request, response) {
    // TODO
}

// CRUD Operations
function createUser (id, username, dateOfBirth) {
    if (username == null || dateOfBirth == null) {
        throw new error (`Illegal username: ${username} or dateofbirth: ${dateOfBirth}`) 
    }
    const user = new User(id, username, dateOfBirth)
    return user
}

function readUsers () {
    // TODO
}

function modifyUser () {
    // TODO
}

function deleteUser () {
    // TODO
}



export default { signUpUser, signInUser }