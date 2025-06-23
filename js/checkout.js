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

// timer
document.addEventListener("DOMContentLoaded", function () {
    const timerBox = document.getElementById('timer-box');

    const timer = () => {

        let secound = 60;

    }

    // timer();
})
