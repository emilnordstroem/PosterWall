import { User } from "../models/user";

export function createUser (id, username, password) {
    const user = new User(
        id, 
        username, 
        password
    )
    return user
}