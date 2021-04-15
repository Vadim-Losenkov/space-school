$(function() {
  
  $('.testimonials__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  })
  
  $('.show-image').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
  });
  $('.header__burger').on('click', () => {
    $('.header__burger').toggleClass('open')
    $('.dropdown').slideToggle(300)
  })
  $('.dropdown__list-item').on('click', () => {
    $('.dropdown').slideToggle(300)
    $('.header__burger').toggleClass('open')
  })
})

new Tabs('[data-menu="menu"]', '[data-menu="list"]')
