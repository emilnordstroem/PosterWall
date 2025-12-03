import fs from 'fs/promises'
import User from "../models/user.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, '../database/users.json')

export function createUser (id, username, password, subscriptions) {
    const user = new User(
        id, 
        username, 
        password,
        subscriptions
    )
    return user
}

export async function saveUserToStorage (user) {    
    try {
        const users = await readUsers()
        users.push(user)
        await updateUsers(users)
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function readUsers() {
    try {
        const data = await fs.readFile(filePath, 'utf-8')
        const json = JSON.parse(data)
        return json
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function updateUsers(users) {
    try {
        const json = JSON.stringify(users, null, 2)
        await fs.writeFile(filePath, json, 'utf-8')
    } catch (error) {
        console.error(error.message)
        throw error
    }
}