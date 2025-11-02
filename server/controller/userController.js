import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import User from '../model/user.js'

// pointer (import.meta.url) to current module file (index.js)
// fileURLToPath function converts url to path
const __filename = fileURLToPath(import.meta.url)
// parent folder of current file (/server)
const __dirname = path.dirname(__filename)

const usersFilePath = path.join(__dirname, '../../users.json')

function signInUser (request, response) {
    // TODO
}

async function signUpUser (username, dateOfBirth) {
    if (!username || !dateOfBirth) {
        throw new Error (`illegal username: ${username} or dateOfBirth: ${dateOfBirth}`) 
    } else if (await doesUsernameAlreadyExist(username)) {
        throw new Error (`username already exist: ${username}`) 
    } else if (!isDateOfBirthAllowed(dateOfBirth)) {
        throw new Error (`date of birth isn't allowed (${dateOfBirth})`) 
    }

    const user = createUser(null, username, dateOfBirth)
    const newUsersList = await addUserToUsers(user)
    await storeUsers(newUsersList)
}

async function doesUsernameAlreadyExist (username) {
    const users = await readUsers()
    for (const user of users) {
        if (user.username.toLowerCase() == username.toLowerCase()) {
            return true
        }
    }
    return false
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


// CRUD Operations
function createUser (id, username, dateOfBirth) {
    if (username == null || dateOfBirth == null) {
        throw new Error (`illegal username: ${username} or dateofbirth: ${dateOfBirth}`) 
    }
    return new User(id, username, dateOfBirth)
}

async function readUsers () {
    let data;
    try {
        data = await fs.readFile(usersFilePath, 'utf-8')
    } catch (error) {
        throw new Error (`readUser() => readFile() error: ${error.message}`)
    } 
    const json = JSON.parse(data)
    const users = json.users
    return users  
}

function modifyUser () {
    // TODO
}

function deleteUser () {
    // TODO
}


async function addUserToUsers (user) {
    const users = await readUsers()
    users.push(user)
    return users
} 


async function storeUsers (users) {
    const date = { users }
    const json = JSON.stringify(date, null, 2)
    try {
        await fs.writeFile(
            usersFilePath,
            json,
            'utf-8' 
        )   
    } catch (error) {
        console.error('storeUsers() write to file error')
    }
}

export default { signUpUser, signInUser }