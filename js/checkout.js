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

    };

    updatedPack(productId);

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

// Products Data
const packs = {
    '1-person': {
        imageHeading: '1 Person - 1 Bag',
        normallyPrice: '79.99',
        couponPercentage: '40%',
        couponPrice: '32',
        todayPrice: '47.99',
    },

    '2-people': {
        imageHeading: '2 People - 2 Bags',
        normallyPrice: '159.98',
        couponPercentage: '43%',
        couponPrice: '68.78',
        todayPrice: '91.20',
    },

    '3-people': {
        imageHeading: '3 People - 3 Bags',
        normallyPrice: '239.97',
        couponPercentage: '46%',
        couponPrice: '110.39',
        todayPrice: '129.58',
    },
};

// Get query string from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('product');
console.log("productId:", productId);

// Update pack display
const updatedPack = (productId) => {
    const product = packs[productId];
    const totalPrice = parseFloat(product.todayPrice) + 19.95 + 32.17;

    if (product) {
        const updatedPrice = `
                                        <div class="com-font normal">
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>Normally</span>
                                                        <span><del class="strike-red">$${product.normallyPrice}</del></span>
                                                    </p>
                                                </div>
                                                <div class="com-font coupon">
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>Coupon: <span
                                                                class="off-color">${product.couponPercentage}<u></u></span></span>
                                                        <span class="off-color">$${product.couponPrice}</span>
                                                    </p>
                                                </div>
                                                <hr>
                                                <div class="total-price">
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>Today's Price</span>
                                                        <span>$${product.todayPrice}</span>
                                                    </p>
                                                </div>

                                                <div class="cart-checkbox manage-checkbox">
                                                    <input id="cart-checkbox" class="cursor" type="checkbox">
                                                    <label for="cart-checkbox">
                                                        I do not want to receive exclusive content and promotion form
                                                        this vendor, and do not share my personal information.
                                                    </label>
                                                </div>

                                                <!-- Desktop - Cart Prices -->
                                                <div class="subtotal mt-3">
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>Subtotal</span>
                                                        <span>$${product.todayPrice}</span>
                                                    </p>
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>Shipping & Handling</span>
                                                        <span>$19.95</span>
                                                    </p>
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>Tax</span>
                                                        <span>$32.17</span>
                                                    </p>
                                                    <p class="mb-0 d-flex justify-content-between">
                                                        <span>TOTAL</span>
                                                        <span>$${totalPrice}</span>
                                                    </p>
                                        </div>`;

        // Update the HTML
        const priceContainers = document.querySelectorAll('.product-prices');
        console.log("priceContainer:", priceContainers);

        priceContainers.forEach(container => {
            container.innerHTML = updatedPrice;
        });
    }
};