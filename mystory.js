var loadProfile = function () {
    let profile = null;
    let foundProfile = false;
    let profileIndex = null;

    // Load profiles from storage
    const profiles = window.localStorage.profiles ? JSON.parse(window.localStorage.profiles) : [];

    // Loop through list of profiles to find my profile
    for (let index = 0; index < profiles.length; index++) {
        profile = profiles[index];

        if (profile.email === window.sessionStorage.loggedIn) {
            foundProfile = true;
            profileIndex = index;

            break;
        }
    }

    const results = { 
        profile: profile,
        index: profileIndex
    };

    return results;
}
