import { User } from "../models/user";

export function createUser (id, username, password) {
    const user = new User(
        parseInt(id), 
        username, 
        password
    )
    return user
}