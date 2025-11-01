
function main () {
    setHTMLBody(constructSignInPage())
}

function setHTMLBody (page) {
    document.body.innerHTML = page
}

function constructSignInPage () {
    return getSignInSection() + getSignUpSection()
}


function getSignInSection () {
    return `<span id="userSignInSection">
        <form id="creatPostForm" action="/" method="POST">
            <label for="username" required>
                Username:
            </label>
            <input type="username">

            <button type="submit">Sign in</button>
        </form>
    </span>`
}

function getSignUpSection () {
    return `<span id="userSignUpSection">
        <form id="creatPostForm" action="/" method="POST">
            <label for="username" required>
                Username:
            </label>
            <input type="username" required>

            <label for="dateOfBirth" required>
                Date of Birth:
            </label>
            <input type="date">

            <button type="submit">Sign up</button>
        </form>
    </span>`
}

function constructHomePage () {
    return getCreatePostSection
}

function getCreatePostSection(){
    return `<header>
        <h2>
            PosterWall
        </h2>
    </header>

    <div id="createPostSection">
        <h3>
            Home
        </h3>
        <form id="creatPostForm" action="/" method="POST">
            <textarea name="text" placeholder="What's on your mind?" required></textarea>
            <button type="submit">Post</button>
        </form>
    </div>`
}


main()