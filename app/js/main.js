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

// window.appArray = []
// class Dynamic {
//   constructor(list) {
//     this._list = document.querySelector(list)
//     this.appContent = null
    
//     this.listener()
//   }
  
//   listener() {
//     this._list.addEventListener('click', event => {
//       const currentElContent = {}
//       const $currentElement = event.target.closest('[data-dynamic-id]')
      
//       currentElContent.title = $currentElement.querySelector('[data-dynamic="title"]').textContent.trim()
//       currentElContent.descr = $currentElement.querySelector('[data-dynamic="descr"]').textContent.trim()
//       currentElContent.id = `text${$currentElement.dataset.dynamicId}`
      
//       this.AppContent = this.render(currentElContent)
//     })
//   }
  
//   render(dataObject) {
//     window.appArray.push(`
//       <div class="dynamic-title">${dataObject.title}</div>
//       <div class="dynamic-descr">${dataObject.descr}</div>
//       <div class="dynamic-text"></div>
//     `)
//     console.log(window.appArray);
//   }
// }

// const dynamicApp = new Dynamic('[data-dynamic="list"]')