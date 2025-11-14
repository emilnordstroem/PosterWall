
class User {
    static globalIdentification = 0
    #id
    #username
    #email
    #dateOfBirth
    #password

    constructor (id, username, email, dateOfBirth, password) {
        if (id == null) {
            this.#id = User.globalIdentification++
        } else {
            this.#id = id
        }
        this.#username = username
        this.#email = email
        this.#dateOfBirth = dateOfBirth
        this.#password = password
    }

    get id () {
        return this.#id
    }

    get username () {
        return this.#username
    }

    get email () {
        return this.#email
    }

    get dateOfBirth () {
        return this.#dateOfBirth
    }

    get password () {
        return this.#password
    }

    set username (username) {
        this.#username = username
    }

    set email (email) {
        this.#email = email
    }

    set dateOfBirth (dateOfBirth) {
        this.#dateOfBirth = dateOfBirth
    }

    set password (password) {
        this.#password = password
    } 

    // invoked by stringify()
    toJSON () {
        return {
            id: this.#id,
            username: this.#username,
            email: this.#email,
            dateOfBirth: this.#dateOfBirth,
            password: this.#password
        }
    }

    static fromJSON (object) {
        return new User(
            object.id,
            object.username,
            object.email,
            object.dateOfBirth,
            object.password
        )
    }

}

export default User