
class Wall {
    static globalIdentification = 0
    #id
    #name
    #createdBy

    constructor (id, name, createdBy) {
        if (id == null) {
            this.id = Wall.globalIdentification++
        } else {
            this.#id = id
        }
        this.#name = name
        this.#createdBy = createdBy
    }

    get id () {
        return this.#id
    }

    get name () {
        return this.#name
    }

    get createdBy () {
        return this.#createdBy
    }

    set name (name) {
        this.#name = name
    } 

}

export default Wall
