
export class Post {
    #content
    #date

    constructor (content, date) {
        this.#content = content
        this.#date = date
    }

    get content () {
        return this.#content
    }

    get date () {
        return this.#date
    }

    set content (content) {
        this.#content = content
    } 

    set date (date) {
        this.#date = date
    } 

    // enables JSON.Stringify() invoke
    toJSON () {
        return {
            content: this.#content,
            date: this.#date
        }
    }

}
