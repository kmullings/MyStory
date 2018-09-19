window.onload = function (e) {
    // debugger;

    // Checked user is logged in
    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.3.html";
    }

    const results = loadProfile();

    displayProfile(results.profile);
};