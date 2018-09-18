window.onload = function (e) {
    // debugger;

    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.3.html";
    }

    loadStories();
};

/**
 * 
 */
var loadStories = function () {
    // Get the stories div
    const myStoriesNode = document.getElementById("my-stories");
    const otherStoriesNode = document.getElementById("other-stories");

    // Get list of stories
    let stories = window.localStorage.stories ? JSON.parse(window.localStorage.stories) : [];

    // Loop through list of stories
    for (let index = 0; index < stories.length; index++) {
        const story = stories[index];

        // Display each story that belongs the logged in user
        if (story.createdBy == window.sessionStorage.loggedIn) {
            const myStoryNode = createStoryNode(story);

            myStoriesNode.appendChild(myStoryNode);
        } else {  // Display other stories as well
            const otherStoryNode = createStoryNode(story.id);

            otherStoriesNode.appendChild(otherStoryNode);
        }
    }
}

/**
 * 
 * @param {*} story 
 */
var createStoryNode = function (story) {
    var storyNode = document.createElement("div");
    var detailsNode = document.createElement("a");
    var editNode = document.createElement("a");
    var deleteNode = document.createElement("span");

    detailsNode.setAttribute("href", "story-details.html?id=" + story.id);
    detailsNode.innerHTML = '<span class="story-title">' + story.title + '</span> |';

    editNode.setAttribute("href", "upsert-details.html?id=" + story.id);
    editNode.innerHTML = '<span class="edit-button"> \
        <i>Edit</i> \
    </span> |';

    deleteNode.innerHTML = '<span class="delete-button"> \
    <em>Delete</em> \
</span>';

    storyNode.appendChild(detailsNode);
    storyNode.appendChild(editNode);
    storyNode.appendChild(deleteNode);

    return storyNode;
}

document.getElementsByClassName("delete-button").addEventListener("click", function (e) {
    debugger;

    e.preventDefault();

    alert("Clicked delete button.");
});