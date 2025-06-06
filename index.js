function toggleDarkMode() {
    const isDark = document.getElementById('darkModeToggle').checked;
    document.body.classList.toggle('darkmode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// On page load, set theme from localStorage
window.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem('theme');
    const toggle = document.getElementById('darkModeToggle');
    if (theme === 'dark') {
        document.body.classList.add('darkmode');
        if (toggle) toggle.checked = true;
    } else {
        document.body.classList.remove('darkmode');
        if (toggle) toggle.checked = false;
    }
});

const profilePics = [
    "images/profile1.jpg",
    "images/profile2.jpg",
    "images/profile3.jpg"
];

function randomizeProfilePic() {
    const img = document.getElementById('profilePic');
    if (!img) return;
    let current = img.src;
    let options = profilePics.filter(src => !current.endsWith(src));
    if (options.length === 0) options = profilePics;
    const random = options[Math.floor(Math.random() * options.length)];
    img.src = random;
}

const randomProfilePics = [
    "images/gif1.gif",
    "images/gif2.gif",
    "images/gif3.gif",
    "images/gif4.gif",
    "images/gif5.gif",
    "images/gif6.gif"
    // Add more image paths as needed
];

function flipProfilePic() {
    const card = document.querySelector('.profile-pic');
    const backImg = document.getElementById('profilePicBack');
    if (!card.classList.contains('flipped')) {
        const random = randomProfilePics[Math.floor(Math.random() * randomProfilePics.length)];
        backImg.src = random;
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}
