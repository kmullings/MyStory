window.onload = function (e) {
    debugger;

    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "/mystory/login.3.html";
    }

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
            const myStoryNode = createStoryNode(story.id);

            myStoriesNode.appendChild(myStoryNode);
            console.log("It's me!");
        } else {  // Display other stories as well
            const otherStoryNode = createStoryNode(story.id);
       
            otherStoriesNode.appendChild(otherStoryNode);
            console.log("It's not me!");
        }
    }
};

var createStoryNode = function (storyId) {
    var storyNode = document.createElement("div");
    var detailsNode = document.createElement("a");
    var editNode = document.createElement("a");
    var deleteNode = document.createElement("a");

    detailsNode.innerHTML = '<a href="story-details.html?id=' + storyId + '"> \
    <span class="story-title">Fast Track Class</span> \
</a> |';

    storyNode.appendChild(detailsNode);
    storyNode.appendChild(editNode);
    storyNode.appendChild(deleteNode);

    return storyNode;
}
