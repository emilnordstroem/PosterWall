
export class PosterWall {
    static #globalIdentification = 0

    constructor (id, title, description, createdByUser) {
        if (!id) {
            this.id = ++PosterWall.#globalIdentification
        } else if (id >= PosterWall.#globalIdentification) {
            this.id = id
            PosterWall.#globalIdentification = ++this.id
        } else {
            this.id = id
        }
        this.title = title
        this.description = description
        this.createdByUser = createdByUser
    }
}