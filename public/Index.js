import { PostController } from './scripts/PostController.js';
import { isPostContentValid } from './scripts/Validation.js';

const postController = new PostController()

function main () {
    onSubmit('submitPost', onPostSubmit)
}

function onSubmit (elementID, actionFunction) {
    const element = document.getElementById(elementID)
    element.addEventListener('click', actionFunction)
}

function onPostSubmit () {
    const postContentElement = document.getElementById('postContent')
    if (!postContentElement) {
        return;
    }
    const postContent = postContentElement.value.trim()
    if (!isPostContentValid(postContent)) {
        return
    }
    postController.createPost(postContent, new Date())
    postContentElement.value = ''
}

main()