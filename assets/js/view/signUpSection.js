
export function getSignUpSection () {
    return `<span id="userSignUpSection">
        <form id="creatPostForm" action="/" method="POST">
            <label for="username">
                Username:
            </label>
            <input type="username" required>

            <label for="dateOfBirth">
                Date of Birth:
            </label>
            <input type="date" required>

            <button type="submit">Sign up</button>
        </form>
    </span>`
}
