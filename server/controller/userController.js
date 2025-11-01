import User from '../model/user.js'


function signUpUser (request, response) {

}

function signInUser (request, response) {

}

export default { signUpUser, signInUser }

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
