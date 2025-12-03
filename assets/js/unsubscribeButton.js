const unsubscribeButton = document.getElementById('unsubscribeButton')

if (unsubscribeButton) {
    
    unsubscribeButton.addEventListener('click', async () => {
        const posterwallId = unsubscribeButton.getAttribute('data-posterWallId')
        const subscriptionId = unsubscribeButton.getAttribute('data-subscriptionId')

        const response = await unsubscribeToPosterWall(posterwallId, subscriptionId)

        if (response.ok) {
            window.location.href = `/posterwall/${posterwallId}`
        }
    })


    async function unsubscribeToPosterWall (posterWallId, subscriptionId) {
        const response = await fetch(`/posterwall/${posterWallId}/unsubscribe`, {
            method: 'DELETE',
            credentials: "include",
            body: JSON.stringify(
                {
                    subscriptionId: subscriptionId
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    }
    
}

