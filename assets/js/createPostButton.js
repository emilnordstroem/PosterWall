
const createPostButton = document.getElementById('createPostButton')
createPostButton.addEventListener('click', async () => {
    const messageInput = document.getElementById('messageInput')

    const message = messageInput.value
    const postedToPosterWall = messageInput.getAttribute('data-posterWallId')

    const response = await createPost(message, postedToPosterWall)

    if (response.ok) {
        window.location.href = `/posterwall/${postedToPosterWall}`
    }

    messageInput.value = ''
})

async function createPost (message, postedToPosterWall) {
    const response = await fetch(`/posterwall/${postedToPosterWall}`, {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(
            {
                message: message,
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}