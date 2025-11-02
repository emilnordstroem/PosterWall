
export function getSignUpSection () {
    return `<span id="userSignUpSection">
        <form id="creatPostForm" action="/signup" method="POST">
            <label for="username">
                Username:
            </label>
            <input name="username" type="text" required />

            <label for="dateOfBirth">
                Date of Birth:
            </label>
            <input name="dateOfBirth" type="date" required />

            <button type="submit">Sign up</button>
        </form>
    </span>`
}
