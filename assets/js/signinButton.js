
const signInButton = document.getElementById('signInButton')
signInButton.addEventListener('click', async () => {
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')

    const username = usernameInput.value
    const password = passwordInput.value    

    const response = await signin(username, password)

    if (response.ok) {
        window.location.href = '/'
    }

    usernameInput.value = ''
    passwordInput.value = ''
})

async function signin (username, password) {
    const response = await fetch('/signin', {
        method: 'POST',
        body: JSON.stringify(
            {
                username: username,
                password: password
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}
