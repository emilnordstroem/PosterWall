
export default class Subscription {
    static #globalIdentification = 0

    constructor (id, userId, posterwallId) {
        if (!id) {
            this.id = ++Subscription.#globalIdentification
        } else if (id >= Subscription.#globalIdentification) {
            this.id = id
            Subscription.#globalIdentification = ++this.id
        } else {
            this.id = id
        }
        this.userId = userId
        this.posterwallId = posterwallId
    }

}