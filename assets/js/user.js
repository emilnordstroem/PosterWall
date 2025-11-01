

class User {
    static globalIdentification = 0
    #id
    #username

    constructor (id, username) {
        if (id == null) {
            this.id = User.globalIdentification++
        } else {
            this.id = id
        }
        this.username = username
    }

    get id () {
        return this.#id
    }

    get username () {
        return this.#username
    }

    set username (username) {
        this.#username = username
    }

}

export default User