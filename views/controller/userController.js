import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import User from '../model/user.js'

export class UserController {
    #__filename
    #__dirname
    #usersFilePath

    constructor () {
        this.#__filename = fileURLToPath(import.meta.url)
        this.#__dirname = path.dirname(this.#__filename)
        this.#usersFilePath = path.join(this.#__dirname, '../../users.json')
    }

    // CRUD operations
    createUser (id, username, email, dateOfBirth, password) {
        return new User(id, username, email, dateOfBirth, password)
    }

    async readUsers () {
        let data;
        try {
            data = await fs.readFile(this.#usersFilePath, 'utf-8')
        } catch (error) {
            throw new Error (`readUser() => readFile() error: ${error.message}`)
        } 
        const json = JSON.parse(data)
        const users = json.users
        return users  
    }   

    async findUserBasedOnUsername (username, users) {
        return users.some(user => user.username == username)
    }

    async modifyUser () {
        // TODO
    }

    async deleteUser (user) {
        const users = await this.readUsers()
        users.filter(currentUser => currentUser.id != user.id)
        storeUsers(users)
        return user
    }

    // Check for conditions
    async doesUsernameAlreadyExist (username, users) {
        const found = users.some(
            user => user.username.toLowerCase() === username.toLowerCase()
        )
        return found
    }

    async doesEmailAlreadyExist (email, users) {
        const found = users.some(
            user => user.email.toLowerCase() === email.toLowerCase()
        )
        return found
    }

    // storage operations
    async addUserToUsers (user) {
        const users = await this.readUsers()
        users.push(user)
        return users
    }    

    async storeUsers (users) {
        const data = { users }
        const json = JSON.stringify(data, null, 2)
        try {
            await fs.writeFile(
                this.#usersFilePath,
                json,
                'utf-8' 
            )   
        } catch (error) {
            console.error('storeUsers() write to file error')
        }
    }

}

const controller = new UserController()
export default controller