
export default class Post {
    static #globalIdentification = 0

    constructor (id, message, postedToPosterWall) {
        if (!id) {
            this.id = ++Post.#globalIdentification
        } else if (id >= Post.#globalIdentification) {
            this.id = id
            Post.#globalIdentification = ++this.id
        } else {
            this.id = id
        }
        this.message = message
        this.postedToPosterWall = postedToPosterWall
    }
}