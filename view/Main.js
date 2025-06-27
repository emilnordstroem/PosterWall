
function login() {
    const username = document.getElementById("username").value;
    const date_of_birth = document.getElementById("dateOfBirth").value;

    if (!username || !date_of_birth) {
        return;
    }

    sessionStorage.setItem(
        "logged_in_as",
        JSON.stringify({ username, date_of_birth })
    );

    window.location.href = "wall.html";
}

function wall_page_loaded(){
    const userData = JSON.parse(sessionStorage.getItem("logged_in_as"));
    if (userData && userData.username) {
        document.getElementById("greetingUser").textContent =
            "Welcome back, " + userData.username;
    }
}