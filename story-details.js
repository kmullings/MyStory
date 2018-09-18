window.onload = function (e) {
    // debugger;

    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.3.html";
    }

    loadStory();
};

var loadStory = function () {
    // debugger;

    let story;
    let foundStory = false;
    const url = new URL(window.location.href);
    const storyId = url.searchParams.get("id");
    let stories = window.localStorage.stories ? JSON.parse(window.localStorage.stories) : [];

    if (storyId) {
        for (let index = 0; index < stories.length; index++) {
            story = stories[index];

            if (story.id == storyId) {
                foundStory = true;

                break;
            }
        }
    }

    if (foundStory) {
        document.getElementById("title").innerText = story.title;
        document.getElementById("text").innerText = story.text;
        document.getElementById("address1").innerText = story.address1;
        document.getElementById("address2").innerText = story.address2;
        document.getElementById("city").innerText = story.city;
        document.getElementById("state").innerText = story.state;
        document.getElementById("zip").innerText = story.zip;
        document.getElementById("country").innerText = story.country;

        let editButtonNode = document.getElementById("edit-button");

        editButtonNode.setAttribute("href", "upsert-story.html?id=" + story.id);
    } else {
        alert("Story not found.");
    }
}
