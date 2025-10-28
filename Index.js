
function main () {
    onPostSubmit('submitPost')
}


function onSubmit (elementID, actionFunction) {
    const element = document.getElementById(elementID)
    element.addEventListener('click', () => actionFunction())
}

function onPostSubmit () {
    const postContentElement = document.getElementById('postContent')
    const postContent = postContentElement.textContent
    if (!isPostContentValid(postContent)) {
        return
    }
    generatePost(postContent)
}

main()

