// Date function 
const dateElement = document.getElementById("current-date");
const now = new Date();
const options = { month: 'long', year: 'numeric' };
const formattedDate = now.toLocaleDateString('en-US', options);

dateElement.textContent = formattedDate;

// viday play/play functionality
const video = document.getElementById("myVideo"); const icon = document.getElementById("playPauseIcon");
function togglePlayPause() {
    if (video.paused) {
        video.play();
        icon.src = "images/pluse.png";
    } else {
        video.pause();
        icon.src = "images/play.webp";
    }
}