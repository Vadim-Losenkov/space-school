$(function() {
  
  $('.testimonials__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500
  })
  
  $('.show-image').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
})