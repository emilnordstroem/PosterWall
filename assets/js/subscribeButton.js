const subscribeButton = document.getElementById('subscribeButton')

if (subscribeButton) {
    
    subscribeButton.addEventListener('click', async () => {
        const posterwallId = subscribeButton.getAttribute('data-posterWallId')

        const response = await subscribeToPosterWall(posterwallId)

        if (response.ok) {
            window.location.href = `/posterwall/${posterwallId}`
        }
    })


    async function subscribeToPosterWall (posterWallId) {
        const response = await fetch(`/posterwall/${posterWallId}/subscribe`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    }
    
}