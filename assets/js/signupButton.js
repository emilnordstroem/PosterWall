
const signUpButton = document.getElementById('signUpButton')
signUpButton.addEventListener('click', async () => {
    const usernameInput = document.getElementById('usernameInput')
    const passwordInput = document.getElementById('passwordInput')

    const username = usernameInput.value
    const password = passwordInput.value    

    const response = await signup(username, password)

    if (response.ok) {
        window.location.href = '/'
    }

})

async function signup (username, password) {
    const response = await fetch('/signup', {
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
