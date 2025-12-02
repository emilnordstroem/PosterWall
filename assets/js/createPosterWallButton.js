
const createPosterWallButton = document.getElementById('createPosterWallButton')

createPosterWallButton.addEventListener('click', async () => {
    const titleInput = document.getElementById('titleInput')
    const descriptionInput = document.getElementById('descriptionInput')

    const title = titleInput.value
    const description = descriptionInput.value

    const response = await createPosterWall(title, description)

    titleInput.value = ''
    descriptionInput = ''
})

async function createPosterWall (title, description) {
    const response = await fetch('/posterwall', {
        method: 'POST',
        body: JSON.stringify(
            {
                title: title,
                description: description
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}