
const logInSection = document.getElementById('userLogInSection')
const logInInputElements = logInSection.querySelectorAll('.logInInput')
const logInButton = logInSection.querySelector('#logInButton')

logInButton.addEventListener('click', logInHandler)

async function logInHandler () {
    const { username, password } = readInputElements()

    const user = await post('/login', {
        username: username,
        password: password
    })

    console.log(user)

    location.reload()
}

function readInputElements () {
    let username
    let password

    logInInputElements.forEach(inputElement => {
        switch (inputElement.name) {
            case 'username':
                username = inputElement.value
                break;
            case 'password':
                password = inputElement.value
                break;
            default:
                break;
        }
    })

    return { username, password }
}

async function post(url, object) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
    })
    if (!response) {
        throw new error('error: assets/js/logIn.js/post(url, object)')
    }
    return response.json()
}


