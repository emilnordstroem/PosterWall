
class Post {
    static globalIdentification = 0

    constructor (postedBy, postedTo, text, date) {
        this.postedBy = postedBy
        this.postedTo = postedTo
        this.text = text
        this.date = date
    }

}

export default Post