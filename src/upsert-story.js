window.onload = function (e) {
    debugger;

    // Checked user is logged in
    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.3.html";
    }

    const url = new URL(window.location.href);
    const storyId = url.searchParams.get("id");

    if (storyId) {
        const results = loadStory();

        displayStoryForEdit(results.story);
    }
};

document.getElementById("upsertStoryForm").addEventListener("submit", function (e) {
    debugger;

    e.preventDefault();
    saveStory();
});
