/**
 * 
 */
var loadStory = function () {
    // debugger;

    let story = null;
    let storyIndex = null;
    const url = new URL(window.location.href);
    const storyId = url.searchParams.get("id");
    let stories = window.localStorage.stories ? JSON.parse(window.localStorage.stories) : [];

    if (storyId) {
        for (let index = 0; index < stories.length; index++) {
            story = stories[index];

            if (story.id == parseInt(storyId)) {
                storyIndex = index;

                break;
            }
        }
    }

    const results = {
        story: story,
        index: storyIndex
    };

    return results;
}

/**
 * 
 * @param {*} story 
 */
var displayStory = function (story) {
    // debugger;

    if (story != null) {
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

/**
 * 
 * @param {*} story 
 */
var displayStoryForEdit = function (story) {
    // debugger;

    if (story != null) {
        document.getElementById("title").value = story.title;
        document.getElementById("text").value = story.text;
        document.getElementById("address1").value = story.address1;
        document.getElementById("address2").value = story.address2;
        document.getElementById("city").value = story.city;
        document.getElementById("state").value = story.state;
        document.getElementById("zip").value = story.zip;
        document.getElementById("country").value = story.country;
    } else {
        alert("Story not found.");
    }
}

/**
 * 
 */
var saveStory = function () {
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

    const url = new URL(window.location.href);
    const storyId = url.searchParams.get("id");
    let stories = window.localStorage.stories ? JSON.parse(window.localStorage.stories) : [];

    if (storyId) {
        for (let index = 0; index < stories.length; index++) {
            if (stories[index].id == parseInt(storyId)) {
                stories[index] = story;
                stories[index].id = parseInt(storyId);
                
                break;
            }
        }
    } else {
        if (stories.length == 0) {
            story.id = 1;
        } else {
            story.id = stories.length + 1;
        }

        stories.push(story);
    }

    window.localStorage.stories = JSON.stringify(stories);
    window.location.href = "./story-details.html?id=" + story.id;

    return false;
}