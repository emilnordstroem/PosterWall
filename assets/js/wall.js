
class Wall {
    static globalIdentification = 0

    constructor (id, createdBy) {
        if (id == null) {
            this.id = Wall.globalIdentification++
        } else {
            this.id = id
        }
        this.createdBy = createdBy
    }

}

export default Wall
