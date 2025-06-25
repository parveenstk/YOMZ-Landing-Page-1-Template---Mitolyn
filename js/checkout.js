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

    // updating cart details
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

// Products Data ( cart price, total, coupon discount, etc .)
const packsPrice = {
    '1-person': {
        normallyPrice: '79.99',
        couponPercentage: '40%',
        couponPrice: '32',
        todayPrice: '47.99',
    },

    '2-people': {
        normallyPrice: '159.98',
        couponPercentage: '43%',
        couponPrice: '68.78',
        todayPrice: '91.20',
    },

    '3-people': {
        normallyPrice: '239.97',
        couponPercentage: '46%',
        couponPrice: '110.39',
        todayPrice: '129.58',
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
    const totalPrice = parseFloat(product.todayPrice) + 19.95 + 32.17;

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
                                <span style="background-color:rgba( 15 , 128 , 0 , 1 );color:rgba( 255 , 255 , 255 , 1 );font-family:'roboto' , sans-serif;font-size:14px">
                                    <strong>&nbsp;4.5&nbsp;</strong>
                                </span>
                                <span
                                    style="background-color:rgba( 255 , 255 , 255 , 0.01 );font-family:'roboto' , sans-serif;font-size:14px"><strong></strong></span>
                                <span
                                    style="background-color:rgba( 255 , 255 , 255 , 0.01 );color:rgba( 15 , 128 , 0 , 1 );font-family:'roboto' , sans-serif;font-size:14px">
                                    <strong>Excellent!</strong>
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

        // Update the HTML (packPrices)
        const priceContainers = document.querySelectorAll('.product-prices');
        priceContainers.forEach(container => {
            container.innerHTML = updatedPrice;
        });
    }
};

// Form elements 
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