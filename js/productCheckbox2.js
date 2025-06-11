// Yomz Carousels
const yomzProduct2 = document.getElementById('yomz-original-carousel2');
const soursProduct2 = document.getElementById('yomz-sours-carousel2');

// Yomz buttons
const originalButton2 = document.getElementById('original-Button2');
const soursButton2 = document.getElementById('sours-Button2');
const checkOriginal2 = document.getElementById('checkOriginal2');
const checkSour2 = document.getElementById('checkSour2');

// offer - 01
const nextStep1_2 = document.getElementById('nextStep1-2');
const offerOne2 = document.getElementById('offer-one2');
const productDesc2 = document.getElementById('prod-Description2');

// offer - 02
const nextStep2_2 = document.getElementById('nextStep2-2');
const backStep2_2 = document.getElementById('backStep2-2');
const offerTwo2 = document.getElementById('offer-two2');
const boxBorder2_2 = document.getElementById('offer2-boxBorder2');
const boxHeader2_2 = document.getElementById('offer2-boxHeader2');
const saveText2_2 = document.getElementById('offer2-saveText2');
const offer2Opt1_2 = document.getElementById('offer2-opt1-2');
const offer2Month2 = document.getElementById('offer2-month2');

// offer - 02 ( package images )
const opt1Img_2 = document.getElementById('banner2-opt1-img1');
const opt2Img_2 = document.getElementById('banner2-opt2-img2');
const opt3Img_2 = document.getElementById('banner2-opt3-img3');
const opt4Img_2 = document.getElementById('banner2-opt4-img4');

// offer - 03
const nextStep3_2 = document.getElementById('nextStep3-2');
const backStep3_2 = document.getElementById('backStep3-2');
const offerThree2 = document.getElementById('offer-three2');
const boxBorder3_2 = document.getElementById('offer3-boxBorder2');
const saveText3_2 = document.getElementById('offer3-saveText2');
const offerBox4_2 = document.getElementById('offerBox-4-2');
const badgeBox4_2 = document.getElementById('badge-box4-2');

// // faqs ( yomz original & yomz sours )
// const faqOriginal1_2 = document.getElementById('faq-yomzOriginal-1-2');
// const faqOriginal2_2 = document.getElementById('faq-yomzOriginal-2-2');
// const faqSours1_2 = document.getElementById('faq-yomzSours-1-2');
// const faqSours2_2 = document.getElementById('faq-yomzSours-2-2');

// inputs of all offer pages
const checkInput1_2 = document.getElementById('checkBox-input1-2');
const checkInput2_2 = document.getElementById('checkBox-input2-2');
const checkInput3_2 = document.getElementById('checkBox-input3-2');
const checkInput4_2 = document.getElementById('checkBox-input4-2');

// Clear localStorage on page reload
window.addEventListener('load', function () {
    // localStorage.clear();
});

// product price 
const productPrice2 = document.getElementById('product-price2');
const handleCheckboxClick2 = (clicked) => {
    if (clicked.value === 'yomzSours') {
        // for yomz Sours

        localStorage.setItem('colorSchema2', JSON.stringify('Green'));

        // change backgrounds
        const backgrounds = [nextStep1_2, nextStep2_2, nextStep3_2, boxHeader2_2, offer2Month2, badgeBox4_2];
        backgrounds.forEach(el => addCls2(el, 'bg-Green'));

        // change borders
        const borders = [boxBorder2_2, boxBorder3_2, offerBox4_2];
        borders.forEach(el => addCls2(el, 'borderGreen'));

        // change fonts 
        const fonts = [saveText2_2, saveText3_2];
        fonts.forEach(el => addCls2(el, 'fontGreen'));

        // faq section mobile
        // remvoeCls2(faqOriginal2_2, 'show2');
        // addCls2(faqSours2_2, 'show2');

        // products
        productDesc2.innerHTML = '<p id="prod-Description" class="text-center mt-3 simp-font">Sour Flavor:<br>Sour Peachy, Strawbeary, Beary Berry</p>';
        productPrice2.innerHTML = '<span id="product-price" class="tab-price">$XX.22</span>';

        // Inputs
        const inputs = [checkInput1_2, checkInput2_2, checkInput3_2, checkInput4_2];
        inputs.forEach(input => addCls2(input, 'inputBorderGreen'));
        checkOriginal2.style.accentColor = 'black';
        originalButton2.classList.remove('borderBlue');
        soursButton2.classList.add('borderGreen');

        // product checkbox
        replaceCls2(yomzProduct2, 'show', 'hide')
        replaceCls2(soursProduct2, 'hide', 'show')
        // soursProduct2.classList.remove('hide');
        // soursProduct2.classList.add('show');
        // yomzProduct2.classList.add('hide');

        // for changing pack images
        const imgs = [opt1Img_2, opt2Img_2, opt3Img_2, opt4Img_2];
        const paths = ['./images/yomzSours/pack-1.png', './images/yomzSours/pack-2.jpg', './images/yomzSours/pack-3.jpg', './images/yomzSours/pack-4.jpg'];
        imgs.forEach((img, index) => {
            img ? (img.src = paths[index]) : console.log("imgs are not found.");
        });

        // Refresh Swiper instance
        if (swiperInstances['yomz-sours-carousel2']) {
            const { productSlider, productThumbs } = swiperInstances['yomz-sours-carousel2'];
            productSlider.update();
            productThumbs.update();
        }

        // for best value selectors ( offer - 2 box options changing border )
        const bestValueSelectors = document.querySelectorAll('.slt-bag-item .card');
        bestValueSelectors.forEach((selector) => {
            selector.classList.replace('borderBlueOffer2', 'borderGreenOffer2');
        });

        // for changing the color on selection ( [Try Once Box] - Offer 3 functionality )
        const savePack = document.querySelectorAll('.offerBox');
        savePack.forEach(element => {
            replaceCls2(element, 'selected-offer-blue', 'selected-offer-Green');
        });

    } else if (clicked.value === 'yomzOriginal') {
        // for yomzOriginal 

        localStorage.setItem('colorSchema2', JSON.stringify('Blue'));

        // change backgrounds
        const backgrounds = [nextStep1_2, nextStep2_2, nextStep3_2, boxHeader2_2, badgeBox4_2];
        backgrounds.forEach(el => remvoeCls2(el, 'bg-Green'));

        // change borders
        const borders = [boxBorder2_2, offer2Opt1_2, boxBorder3_2, offerBox4_2];
        borders.forEach(el => remvoeCls2(el, 'borderGreen'));

        // change fonts 
        const fonts = [saveText2_2, saveText3_2];
        fonts.forEach(el => remvoeCls2(el, 'fontGreen'));

        // change Inputs
        const inputs = [checkInput1_2, checkInput2_2, checkInput3_2, checkInput4_2];
        inputs.forEach(input => remvoeCls2(input, 'inputBorderGreen'));

        // faq section mobile
        // remvoeCls2(faqSours2_2, 'show2');
        // addCls2(faqOriginal2_2, 'show2');

        // product description
        productDesc2.innerHTML = '<p id="prod-Description2" class="text-center mt-3 simp-font">Flavor:<br>Peachy, Strawbeary, Beary Berry</p>';
        productPrice2.innerHTML = '<span id="product-price2" class="tab-price">$XX.99</span>';
        offer2Month2.classList.remove('bg-Green');
        checkSour2.style.accentColor = 'green';
        soursButton2.classList.remove('borderGreen');
        originalButton2.classList.add('borderBlue');

        // product checkbox
        replaceCls2(yomzProduct2, 'hide', 'show');
        replaceCls2(soursProduct2, 'show', 'hide');
        // yomzProduct2.classList.remove('hide');
        // yomzProduct2.classList.add('show');
        // soursProduct2.classList.add('hide');

        // for changing pack images
        const imgs = [opt1Img_2, opt2Img_2, opt3Img_2, opt4Img_2];
        const paths = ['./images/yomzOriginal/pack-1.jpg', './images/yomzOriginal/pack-2.jpg', './images/yomzOriginal/pack-3.jpg', './images/yomzOriginal/pack-4.jpg'];
        imgs.forEach((img, index) => {
            img ? (img.src = paths[index]) : console.log("imgs are not found.");
        });

        // Refresh Swiper instance
        if (swiperInstances['yomz-original-carousel2']) {
            const { productSlider, productThumbs } = swiperInstances['yomz-original-carousel2'];
            productSlider.update();
            productThumbs.update();
        };

        // for best value selectors ( offer - 2 box options changing border )
        const bestValueSelectors = document.querySelectorAll('.slt-bag-item .card');
        bestValueSelectors.forEach((selector) => {
            selector.classList.replace('borderGreenOffer2', 'borderBlueOffer2');
        });

        // for changing the color on selection ( [Try Once Box] - Offer 3 functionality )
        const savePack = document.querySelectorAll('.offerBox');
        savePack.forEach(element => {
            replaceCls2(element, 'selected-offer-Green', 'selected-offer-blue');
        });
    }

    // Uncheck other checkboxes
    const checkboxes = document.querySelectorAll('input[name="productType2"]');
    checkboxes.forEach(cb => {
        if (cb !== clicked) cb.checked = false;
    });
};

// Stepper ( bar & circle )
const circle1_2 = document.getElementById('step1-circle2');
const bar1_2 = document.getElementById('step1-bar2');
const circle2_2 = document.getElementById('step2-circle2');
const bar2_2 = document.getElementById('step2-bar2');
const circle3_2 = document.getElementById('step3-circle2');

// to move next1 to next2
nextStep1_2.addEventListener('click', () => {
    offerTwo2.classList.remove('hide');
    offerOne2.classList.add('hide');
    replaceCls2(circle1_2, 'active', 'completed');
    replaceCls2(bar1_2, 'bar', 'compltedBar');
    replaceCls2(circle2_2, 'circle', 'circleActive');
});

// to move next2 to next3
nextStep2_2.addEventListener('click', () => {
    offerThree2.classList.remove('hide');
    offerTwo2.classList.add('hide');
    replaceCls2(circle2_2, 'circleActive', 'circleCompleted');
    replaceCls2(bar2_2, 'bar', 'compltedBar');
    replaceCls2(circle3_2, 'circle', 'circleActive');
});

// to backward backButton-2 to step1
backStep2_2.addEventListener('click', () => {
    offerTwo2.classList.add('hide');
    offerOne2.classList.remove('hide');
    offerOne2.classList.add('show');
    replaceCls2(circle2_2, 'circleActive', 'circle');
    replaceCls2(bar1_2, 'compltedBar', 'bar');
    replaceCls2(circle1_2, 'completed', 'active');
});

// to backward backButton-3 to backButton-2
backStep3_2.addEventListener('click', () => {
    offerThree2.classList.add('hide');
    offerTwo2.classList.add('show');
    offerTwo2.classList.remove('hide');
    replaceCls2(circle3_2, 'circleActive', 'circle');
    replaceCls2(bar2_2, 'compltedBar', 'bar');
    replaceCls2(circle2_2, 'circleCompleted', 'circleActive');
});

// Re-usable functions
const addCls2 = (element, className) => {
    element.classList.add(`${className}`);
};

const remvoeCls2 = (element, className) => {
    element.classList.remove(`${className}`);
};

const replaceCls2 = (element, existedCls, toChangedCls) => {
    element.classList.replace(`${existedCls}`, `${toChangedCls}`);
};

// offer - 2 box options changing border [Best Value Box]
const selectedOpt2 = (clicked) => {
    const optPrice = document.getElementById('options-price2');
    const opts = document.querySelectorAll('.offer2-opts');
    opts.forEach(opt => {
        remvoeCls2(opt, 'borderBlueOffer2');
        remvoeCls2(opt, 'borderGreenOffer2');
    });
    const colorSchema = JSON.parse(localStorage.getItem('colorSchema2'));
    colorSchema === 'Green' ? addCls2(clicked, 'borderGreenOffer2') : addCls2(clicked, 'borderBlueOffer2');

    // to change the ( options-price )
    const value = clicked.dataset.qty;
    console.log("value:", value);

    const optPriceValue = optPrice.dataset.price;
    const finalValue = value * optPriceValue;
    optPrice.innerText = `$${finalValue.toFixed(2)}`;
};

// [Which frequency is right for me?] Offer-2 functionality
const householdItems2 = document.querySelectorAll('.household');
householdItems2.length > 0 ? (householdItems2[0].classList.add('household-slt')) : '';
householdItems2.forEach(item => {
    item.addEventListener('click', () => {
        householdItems2.forEach(el => el.classList.remove('household-slt'));
        item.classList.add('household-slt');
    });
});

// [Try Once Box] - Offer 3 functionality
const offerBoxes2 = document.querySelectorAll('.offerBox2');
offerBoxes2.length > 0 ? (offerBoxes2[0].classList.add('selected-offer-blue')) : '';
offerBoxes2.forEach(box => {
    box.addEventListener('click', () => {
        offerBoxes2.forEach(b => b.classList.remove('selected-offer-blue'));
        offerBoxes2.forEach(b => b.classList.remove('selected-offer-Green'));

        // to change/update the "offer3 - tryOnce Value"
        const tryOncePrice = document.getElementById('tryOnce-price2');
        const tryPrice = tryOncePrice.dataset.price;
        const value = box.dataset.price;
        const percentage = box.dataset.percentage;

        // Updated Value ( Try Offer Box )
        const finalValue = value * tryPrice;
        tryOncePrice.innerText = `$${finalValue.toFixed(2)}`;

        // Updated Best Value Box ( offer-3 )
        saveText3_2.innerText = `Save ${percentage}%`;

        // to change value & save% of [bestValueBox2 offer-3]
        const bestValuePrice = document.getElementById('Offer3-bestValue-Price2');
        const bestValue = bestValuePrice.dataset.price;
        const UpdatedBestValue = value * bestValue;
        bestValuePrice.innerHTML = `$${UpdatedBestValue.toFixed(2)}`;

        // to fill the color according to the gummy selected
        const colorSchema = JSON.parse(localStorage.getItem('colorSchema2'));
        colorSchema === 'Green' ? addCls2(box, 'selected-offer-Green') : box.classList.add('selected-offer-blue');
    });
});

// offer - 3 ( Best Value Box )
const checkbox2 = document.getElementById('checkBox-input4-2');
const bestValueBox2 = document.getElementById('offer3-bv-box2');
const bestValueHeader2 = document.getElementById('offer3-bv-box-header2');

// show border color & header color when input is checked 
const updateBoxBorder2 = () => {
    const colorSchema = JSON.parse(localStorage.getItem('colorSchema2')) || 'Blue';
    bestValueBox2.classList.remove('borderGreenOffer2', 'borderBlueOffer2');
    bestValueHeader2.classList.remove('bg-Green', 'bg-Blue');
    if (checkbox2.checked) {
        const borderClass = colorSchema === 'Green' ? 'borderGreenOffer2' : 'borderBlueOffer2';
        const bgClass = colorSchema === 'Green' ? 'bg-Green' : 'bg-Blue';
        bestValueBox2.classList.add(borderClass);
        bestValueHeader2.classList.add(bgClass);
    }
};
checkbox2.addEventListener('change', updateBoxBorder2);

// Cart Section
const cart2 = document.getElementById('cart-section');

nextStep3_2.addEventListener('click', () => {
    replaceCls2(cart2, 'hide', 'show')
})