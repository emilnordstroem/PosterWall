

function main () {

}

function setWindow (page) {

}



function getSignInSection () {
    return `<span id="userSignInSection">
        <form id="creatPostForm" action="/" method="POST">
            <label for="username">
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
            <label for="username">
                Username:
            </label>
            <input type="username">

            <label for="dateOfBirth">
                Date of Birth:
            </label>
            <input type="date">

            <button type="submit">Sign up</button>
        </form>
    </span>`
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
            <textarea name="text" placeholder="What's on your mind?"></textarea>
            <button type="submit">Post</button>
        </form>
    </div>`
}