
export function getSignInSection () {
    return `<span id="userSignInSection">
        <form id="creatPostForm" action="/signin" method="POST">
            <label for="username">
                Username:
            </label>
            <input type="username" required>

            <button type="submit">Sign in</button>
        </form>
    </span>`
}