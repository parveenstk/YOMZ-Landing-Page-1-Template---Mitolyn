const swiperInstances = {}; // global map to store instances

if ($(".product-left").length) {
    $(".product-left").each(function (index) {
        const $container = $(this);
        const id = $container.attr('id');

        const $sliderEl = $container.find('.product-slider')[0];
        const $thumbsEl = $container.find('.product-thumbs')[0];
        const $nextBtn = $container.find('.swiper-button-next')[0];
        const $prevBtn = $container.find('.swiper-button-prev')[0];
        const slideCount = $container.find('.product-slider .swiper-slide').length;

        const productSlider = new Swiper($sliderEl, {
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            direction: 'horizontal',
            loopedSlides: slideCount,
            navigation: {
                nextEl: $nextBtn,
                prevEl: $prevBtn,
            },
            resizeObserver: true,
        });

        const productThumbs = new Swiper($thumbsEl, {
            spaceBetween: 0,
            centeredSlides: false,
            loop: true,
            slideToClickedSlide: true,
            direction: 'horizontal',
            slidesPerView: 4,
            loopedSlides: slideCount,
        });

        productSlider.controller.control = productThumbs;
        productThumbs.controller.control = productSlider;

        // Store instances for later access
        swiperInstances[id] = {
            productSlider,
            productThumbs
        };
    });
}