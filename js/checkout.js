// Pay now & payPal buttons
const payNowBtn = document.getElementById('payNow-button');
const payPalBtn = document.getElementById('payPal-button');
const buttonDesc = document.getElementById('description');

// mobile elements
const buttonDescMobile = document.getElementById('description-mobile');
const payNowMobile = document.getElementById('payNow-button-mobile');
const payPalMobile = document.getElementById('payPal-button-mobile');

// which payment method is selected
document.addEventListener("DOMContentLoaded", function () {
    const paypalRadio = document.getElementById("payPal-btn");
    const creditCardRadio = document.getElementById("creditCard-btn");
    const creditCardCollapse = document.getElementById("collapseTwo");

    function togglePaymentSections() {
        if (paypalRadio.checked) {
            creditCardCollapse.classList.remove("show");

            // replace class to show 
            const Ids = ['payPal-button', 'payPal-button-mobile'];
            Ids.forEach((id) => {
                replaceCls(id, 'hide', 'show')
            });

            // replace class to hide
            const hideId = ['payNow-button', 'payNow-button-mobile'];
            hideId.forEach((id) => {
                replaceCls(id, 'show', 'hide')
            });

            // other elements
            buttonDesc.innerHTML = 'By clicking Continue to PayPal below, I agree to the <a href="#">Terms of Sale</a>.'
            buttonDescMobile.innerHTML = 'By clicking Continue to PayPal below, I agree to the <a href="#">Terms of Sale</a>.'

        } else if (creditCardRadio.checked) {
            creditCardCollapse.classList.add("show");

            // replace class to show 
            const Ids = ['payNow-button', 'payNow-button-mobile'];
            Ids.forEach((id) => {
                replaceCls(id, 'hide', 'show')
            });

            // replace class to hide
            const hideId = ['payPal-button', 'payPal-button-mobile'];
            hideId.forEach((id) => {
                replaceCls(id, 'show', 'hide')
            });

            // other elements
            buttonDescMobile.innerHTML = 'By clicking Pay Now below, I agree to the <a href = "#"> Terms of Sale</a>.'
            buttonDesc.innerHTML = 'By clicking Pay Now below, I agree to the <a href = "#"> Terms of Sale</a>.';
        }
    }

    // Initial check
    togglePaymentSections();

    // Event listeners
    paypalRadio.addEventListener("change", togglePaymentSections);
    creditCardRadio.addEventListener("change", togglePaymentSections);
});

const addCls = (elementId, className) => {
    const element = document.getElementById(elementId);
    element.classList.add(className);
};

const removeCls = (elementId, className) => {
    const element = document.getElementById(elementId);
    element.classList.remove(className);
};

const replaceCls = (elementId, className1, className2) => {
    const element = document.getElementById(elementId);
    element.classList.replace(className1, className2);
};

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