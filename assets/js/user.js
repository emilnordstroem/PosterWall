

class User {
    static globalIdentification = 0

    constructor (id, username) {
        if (id == null) {
            this.id = User.globalIdentification++
        } else {
            this.id = id
        }
        this.username = username
    }

}

export default User