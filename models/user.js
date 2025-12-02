
export default class User {
    static #globalIdentification = 0

    constructor (id, username, password) {
        if (!id) {
            this.id = ++User.#globalIdentification
        } else if (id >= User.#globalIdentification) {
            this.id = id
            User.#globalIdentification = ++this.id
        } else {
            this.id = id
        }
        this.username = username
        this.password = password
    }

}