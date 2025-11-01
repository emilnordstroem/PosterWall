
class User {
    static globalIdentification = 0
    #id
    #username
    #dateOfBirth

    constructor (id, username, dateOfBirth) {
        if (id == null) {
            this.#id = User.globalIdentification++
        } else {
            this.#id = id
        }
        this.#username = username
        this.#dateOfBirth = dateOfBirth
    }

    get id () {
        return this.#id
    }

    get username () {
        return this.#username
    }

    get dateOfBirth () {
        return this.#dateOfBirth
    }

    set username (username) {
        this.#username = username
    }

}

export default User