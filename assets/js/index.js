
//== Lightbox About-2
// https://biati-digital.github.io/glightbox/
(function(){
    var lightboxInlineIframe = GLightbox({
        'selector': '.glightbox4'
    });
})();
//======================== /Lightbox About-2



//== Slider Card moduleReviews-2
new Glider(document.querySelector('.glider-reviews'), {
    slidesToShow: 1.1,
    slidesToScroll: 1,
    scrollLock: false,
    arrows: {
        prev: '.prev-reviews',
        next: '.next-reviews'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            arrows: {
                prev: '.prev-reviews2',
                next: '.next-reviews2'
            },
        }
    }]
});
//======================== /Slider Card moduleReviews-2