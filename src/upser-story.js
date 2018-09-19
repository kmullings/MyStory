document.getElementById("upsertStoryForm").addEventListener("submit", function (e) {
    debugger;

    e.preventDefault();
    upsertStoryForm();
});

var upsertStoryForm = function () {
    const story = {
        title: document.forms["upsertStoryForm"]["title"].value,
        text: document.forms["upsertStoryForm"]["text"].value,
        // lat: document.forms["upsertStoryForm"]["lat"].value,
        // long: document.forms["upsertStoryForm"]["long"].value,
        address1: document.forms["upsertStoryForm"]["address1"].value,
        address2: document.forms["upsertStoryForm"]["address2"].value,
        city: document.forms["upsertStoryForm"]["city"].value,
        state: document.forms["upsertStoryForm"]["state"].value,
        zip: document.forms["upsertStoryForm"]["zip"].value,
        country: document.forms["upsertStoryForm"]["country"].value,
        dateTime: document.forms["upsertStoryForm"]["date-time"].value,
        createdBy: window.sessionStorage.loggedIn
    };

    console.log(JSON.stringify(story));

    let stories = window.localStorage.stories ? JSON.parse(window.localStorage.stories) : [];

    if (stories.length == 0) {
        story.id = 1;
    } else {
        story.id = stories.length + 1;
    }

    stories.push(story);
    window.localStorage.stories = JSON.stringify(stories);
    window.location.href = "./story-details.html?id=" + story.id;

    return false;
}
