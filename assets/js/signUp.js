
const signUpSection = document.getElementById('userSignUpSection')
const signUpInputElements = signUpSection.querySelectorAll('.signupInput')
const signUpButton = signUpSection.querySelector('#signUpButton')

signUpButton.addEventListener('click', signUpHandler)

async function signUpHandler () {    
    const { username, email, dateOfBirth, password } = readInputElements()

    const user = await post('/signup', {
        username: username,
        email: email,
        dateOfBirth: dateOfBirth,
        password: password
    })

    console.log(user)

    location.reload()
}

function readInputElements () {
    let username;
    let email;
    let dateOfBirth;
    let password;

    signUpInputElements.forEach(inputElement => {
        switch (inputElement.name) {
            case 'username':
                username = inputElement.value
                break;
            case 'email':
                email = inputElement.value
            break;
            case 'dateOfBirth':
                dateOfBirth = inputElement.value
                break;
            case 'password':
                password = inputElement.value
                break;
            default:
                break;
        }
    })

    return { username, email, dateOfBirth, password }
}

async function post(url, object) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
    })
    if (!response) {
        throw new error('error: assets/js/signUp.js/post(url, object)')
    }
    return response.json()
}


