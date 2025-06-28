// Form elements 
// Pay now & payPal buttons
const payNowBtn = document.getElementById('payNow-button');
const payPalBtn = document.getElementById('payPal-button');
const buttonDesc = document.getElementById('description');

// mobile elements
const buttonDescMobile = document.getElementById('description-mobile');
const payNowMobile = document.getElementById('payNow-button-mobile');
const payPalMobile = document.getElementById('payPal-button-mobile');

// Customer information
const email = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');

// card elements
const cardNumber = document.getElementById('card-number');
const cardExpiry = document.getElementById('expiration-date');
const cardSecurityCode = document.getElementById('security-code');
const cardHolderName = document.getElementById('cardholder-name');

// Shipping information
const fullName = document.getElementById('full-name');
const streetAddress = document.getElementById('street-address');
const apptsAddress = document.getElementById('apt-suite-other');
const city = document.getElementById('city');
const postalCode = document.getElementById('postal-code');

// which payment method is selected
document.addEventListener("DOMContentLoaded", function () {
    const paypalRadio = document.getElementById("payPal-radio");
    const creditCardRadio = document.getElementById("creditCard-radio");
    const cardDetails = document.getElementById("collapseTwo");

    // Bootstrap Collapse instance
    const collapseInstance = new bootstrap.Collapse(cardDetails, {
        toggle: false // Don't toggle immediately on instantiation
    });

    function togglePaymentSections() {
        if (paypalRadio.checked) {
            collapseInstance.hide(); // Bootstrap collapse hide

            ['payPal-button', 'payPal-button-mobile'].forEach(id => {
                replaceCls(id, 'hide', 'show');
            });

            ['payNow-button', 'payNow-button-mobile'].forEach(id => {
                replaceCls(id, 'show', 'hide');
            });

            buttonDesc.innerHTML =
                'By clicking Continue to PayPal below, I agree to the <a href="#">Terms of Sale</a>.';
            buttonDescMobile.innerHTML =
                'By clicking Continue to PayPal below, I agree to the <a href="#">Terms of Sale</a>.';
        } else if (creditCardRadio.checked) {
            collapseInstance.show(); // Bootstrap collapse show

            ['payNow-button', 'payNow-button-mobile'].forEach(id => {
                replaceCls(id, 'hide', 'show');
            });

            ['payPal-button', 'payPal-button-mobile'].forEach(id => {
                replaceCls(id, 'show', 'hide');
            });

            buttonDesc.innerHTML =
                'By clicking Pay Now below, I agree to the <a href="#">Terms of Sale</a>.';
            buttonDescMobile.innerHTML =
                'By clicking Pay Now below, I agree to the <a href="#">Terms of Sale</a>.';
        }
    }

    // Initial toggle check
    togglePaymentSections();

    // Event listeners
    paypalRadio.addEventListener("change", togglePaymentSections);
    creditCardRadio.addEventListener("change", togglePaymentSections);

    // Updating cart details (you mentioned this is custom)
    updatedPack(productId);
});

document.addEventListener("DOMContentLoaded", function () {
    const filters = {
        phone: value => value.replace(/[^0-9+()\-\s]/g, ''),
        'card-number': value => value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim(),
        expiry: value => {
            let input = value.replace(/\D/g, '');
            let month = input.slice(0, 2);
            let year = input.slice(2, 4);
            if (month.length === 2) {
                let numericMonth = parseInt(month, 10);
                if (numericMonth < 1) month = '01';
                if (numericMonth > 12) month = '12';
            }
            return input.length > 2 ? `${month}/${year}` : month;
        },
        digits: value => value.replace(/\D/g, ''),
        name: value => value.replace(/[^A-Za-z\s.'-]/g, ''),
        city: value => value.replace(/[^A-Za-z\s.'-]/g, ''),
        address: value => value.replace(/[^\w\s.,'\-\/]/g, ''),
        apt: value => value.replace(/[^\w\s.#,\-\/]/g, ''),
        postal: value => value.replace(/\D/g, '')
    };

    // Attach filters dynamically based on data-filter attribute
    document.querySelectorAll('[data-filter]').forEach(input => {
        const type = input.getAttribute('data-filter');
        const filterFn = filters[type];
        if (filterFn) {
            input.addEventListener('input', function () {
                this.value = filterFn(this.value);
            });
        }
    });

    // Handle form submission
    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const values = {};

            // Get selected payment method radio
            const selectedPayment = form.querySelector('input[name="flexRadioDefault"]:checked');
            console.log("selectedPayment:", selectedPayment);

            if (selectedPayment) {
                values['payment-method'] =
                    selectedPayment.id === 'creditCard-radio'
                        ? 'Credit Card'
                        : selectedPayment.id === 'payPal-radio'
                            ? 'PayPal'
                            : 'Unknown';
            } else {
                values['payment-method'] = '';
            }

            // Get all non-radio inputs (text, checkboxes)
            const inputs = form.querySelectorAll('input:not([type="radio"])');
            inputs.forEach(input => {
                const key = input.id || input.name || 'unknown';

                if (input.type === 'checkbox') {
                    // Show true if checked, otherwise false
                    values[key] = input.checked;
                } else {
                    // Show value or empty string if empty
                    values[key] = input.value ? input.value.trim() : '';
                }
            });

            // all values are showing
            // console.log('Form submitted with values:', values);

            // Save to localStorage
            localStorage.setItem('checkoutData', JSON.stringify(values));

            // Reset the form
            form.reset();

            // after submit render to ( udsell offer_1 page )
            setTimeout(() => {
                window.location.href = 'https://suretekinfosoft.com/demo106/funnel1/lp1/offer/offer1.html';
            }, 500);

            // Optional: Reset any payment section display
            // togglePaymentSections(); // You can call this again to re-toggle UI if needed
        });
    }
});

// Saving data in localStorage
const savedData = JSON.parse(localStorage.getItem('checkoutData'));
console.log("savedData:", savedData);

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

// Products Data ( cartprice, total, coupon discount, etc .)
const packsPrice = {
    '1-person': {
        normallyPrice: '79.99',
        couponPercentage: '40%',
        couponPrice: '32',
        todayPrice: '47.99',
        shipping: '9.95',
    },

    '2-people': {
        normallyPrice: '159.98',
        couponPercentage: '43%',
        couponPrice: '68.78',
        todayPrice: '91.20',
        shipping: '9.95',
    },

    '3-people': {
        normallyPrice: '239.97',
        couponPercentage: '46%',
        couponPrice: '110.39',
        todayPrice: '129.58',
        shipping: 'FREE',
    },
};

// UpperCart ( Product image, Image heading )
const upperCartData = {
    '1-person': {
        bagName: 'bag-1 Img',
        imagePath: 'images/bags/desktop-bag-1.png',
        imageHeading: '1 Person - 1 Bag',
    },

    '2-people': {
        bagName: 'bag-2 Img',
        imagePath: 'images/bags/desktop-bag-2.png',
        imageHeading: '2 People - 2 Bags',
    },

    '3-people': {
        bagName: 'bag-3 Img',
        imagePath: 'images/bags/desktop-bag-3.png',
        imageHeading: '3 People - 3 Bags',
    },
};

// Get query string from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('product');
// console.log("productId:", productId);

// Update pack display
const updatedPack = (productId) => {
    const product = packsPrice[productId];
    const uprCart = upperCartData[productId];
    const totalPrice = product.shipping === "FREE"
        ? parseFloat(product.todayPrice)
        : (parseFloat(product.todayPrice) + parseFloat(product.shipping));

    if (uprCart) {
        const updatedUprCart = `
                    <div class="upper-cart">
                        <div class="products-image">
                            <img src=${uprCart.imagePath} class="img-fluid" alt="${uprCart.bagName}">
                        </div>
                        <div class="summery-data text-center">
                            <p class="mb-0"><strong>Cart Summary</strong></p>
                            <h4 class="mb-0"><strong>${uprCart.imageHeading}</strong></h4>
                            <p style="text-align:center">
                                <span class="ratings">
                                    <strong>&nbsp;4.5&nbsp;</strong>
                                </span>
                                <span
                                    style="background-color:rgba( 255 , 255 , 255 , 0.01 ); color:rgba( 15 , 128 , 0 , 1 );font-family:'roboto' , sans-serif;font-size:14px">
                                    <strong>&nbsp;Excellent!</strong>
                                </span>
                                <span style="font-family:'roboto' , sans-serif;font-size:14px"></span>
                                <span
                                    style="color:rgba( 132 , 132 , 132 , 1 );font-family:'roboto' , sans-serif;font-size:14px">
                                    (2,797 reviews)
                                </span>
                            </p>
                        </div>
                    </div> `;

        // Update the HTML (upperCartData)
        const cart = document.querySelectorAll('.upper-cart');
        cart.forEach(element => {
            element.innerHTML = updatedUprCart;
        });
    };

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
                                            class="off-color"><u>${product.couponPercentage}OFF</u></span></span>
                                    <span class="off-color">-$${product.couponPrice}</span>
                                </p>
                            </div>
                            <hr>
                            <div class="total-price">
                                <p class="mb-0 d-flex justify-content-between">
                                    <span>Today's Price</span>
                                    <span>$${product.todayPrice}</span>
                                </p>
                            </div>

                            <div class="cart-checkbox">
                                <input name="cart-checkbox" class="cursor" type="checkbox">
                                <p>
                                    I do not want to receive exclusive content and promotion form
                                    this vendor, and do not share my personal information.
                                </p>
                            </div>

                            <!-- Desktop - Cart Prices -->
                            <div class="subtotal mt-3">
                                <p class="mb-0 d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <span>$${product.todayPrice}</span>
                                </p>
                                <p class="mb-0 d-flex justify-content-between">
                                    <span>Shipping & Handling</span>
                                    <span>$${product.shipping}</span>
                                </p>
                                <p class="mb-0 d-flex justify-content-between">
                                    <span>Tax</span>
                                    <span>$0.00</span>
                                </p>
                                <p class="mb-0 d-flex justify-content-between">
                                    <span>TOTAL</span>
                                    <span>$${totalPrice}</span>
                                </p>
                    </div>`;

        // Update the HTML (packPrices)
        const priceContainers = document.querySelectorAll('.product-prices');
        priceContainers.forEach(container => {
            container.innerHTML = updatedPrice;
        });
    }
};