import { getSignInSection } from './view/signInSection.js'
import { getSignUpSection } from './view/signUpSection.js'
import { getCreatePostSection } from './view/createPostSection.js'

function setHTMLBody (page) {
    document.body.innerHTML = page
}

function constructSignInPage () {
    return getSignInSection() + getSignUpSection()
}

function constructHomePage () {
    return getCreatePostSection()
}

function main () {
    setHTMLBody(constructSignInPage())
}

main()