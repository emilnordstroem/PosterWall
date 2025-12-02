
const loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', async () => {
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')

    const username = usernameInput.value
    const password = passwordInput.value    

    const response = await login(username, password)

    if (response.ok) {
        window.location.href = '/'
    }

})

async function login (username, password) {
    const response = await fetch('url', {
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
