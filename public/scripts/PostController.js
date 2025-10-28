import { Post } from './Post.js'

export class PostController {

    createPost (content, date) {
        const post = new Post(content, date)
        const postToJSON = JSON.parse(post)
        
    }



}
