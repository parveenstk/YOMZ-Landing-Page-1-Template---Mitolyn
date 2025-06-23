// which payment method is selected
document.addEventListener("DOMContentLoaded", function () {
    const paypalRadio = document.getElementById("payPal-btn");
    const creditCardRadio = document.getElementById("creditCard-btn");
    const creditCardCollapse = document.getElementById("collapseTwo");

    function togglePaymentSections() {
        if (paypalRadio.checked) {
            // Hide credit card section
            creditCardCollapse.classList.remove("show");

        } else if (creditCardRadio.checked) {
            // Show credit card section
            creditCardCollapse.classList.add("show");
        }
    }

    // Initial check
    togglePaymentSections();

    // Event listeners
    paypalRadio.addEventListener("change", togglePaymentSections);
    creditCardRadio.addEventListener("change", togglePaymentSections);
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