// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.product-container');

    containers.forEach((container) => container.addEventListener('click', function (event) {
        const productBox = event.target.closest('.gumm-bag');

        if (productBox && container.contains(productBox)) {
            const clickedId = productBox.dataset.id;
            window.location.href = `http://127.0.0.1:5501/checkout.html?product=${clickedId}`
            // window.location.href = `https://suretekinfosoft.com/demo106/funnel1/lp1/offer/checkout.html?product=${clickedId}`

            // Perform action based on the clickedId
            switch (clickedId) {
                case '1-person':
                    console.log('Basic plan clicked (1-person)');
                    break;

                case '2-people':
                    console.log('Bundle plan clicked (2-people)');
                    break;

                case '3-people':
                    console.log('Most Popular plan clicked (3-people)');
                    break;

                default:
                    console.log('Unknown product clicked');
            }
        }
    }));
});