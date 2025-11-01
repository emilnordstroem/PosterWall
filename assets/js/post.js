
class Post {
    static globalIdentification = 0

    constructor (id, username, postedTo, text) {
        if (id == null) {
            this.id = Post.globalIdentification++
        } else {
            this.id = id
        }
        this.username = username
        this.postedTo = postedTo
        this.text = text
    }

}

export default Post