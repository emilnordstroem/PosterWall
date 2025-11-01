
class Post {
    #postedBy
    #postedTo
    #text
    #date

    constructor (postedBy, postedTo, text, date) {
        this.#postedBy = postedBy
        this.#postedTo = postedTo
        this.#text = text
        this.#date = date
    }

    get postedBy () {
        return this.#postedBy
    }

    get postedTo () {
        return this.#postedTo
    }

    get text () {
        this.#text
    }

    get date () {
        this.#date
    }

    set text (text) {
        this.#text = text
    }

}

export default Post