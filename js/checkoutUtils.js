
// Pop-Up showing on when going to close checkout.html
let hasShownModal = false;
document.addEventListener("mouseleave", function (event) {
    // Trigger only if mouse leaves from the top
    if (event.clientY <= 0 && !hasShownModal) {
        let myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        hasShownModal = true;
    }
});

// timer functionality
let timeLeft = 9 * 60 + 45; // 585 seconds

const timerDisplay = document.getElementById('timer-display');
const timerBox = document.getElementById('timer-box');

function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerBox.style.display = 'none'; // Hide the timer box
    }

    timeLeft--;
}
// Start timer on page load
updateTimer(); // initial display
const timerInterval = setInterval(updateTimer, 1000);

// Below today's price ( checkBox Functionality )
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.cart-checkbox').forEach((container) => {

        container.addEventListener('click', (event) => {
            const checkbox = container.querySelector('input[type="checkbox"]');
            if (event.target === checkbox) return;
            checkbox.checked = !checkbox.checked;
        });
    });
});