class Tabs {
  constructor(menuSelector, itemsSelector) {
    this.$menu = document.querySelector(menuSelector)
    this.$items = document.querySelector(itemsSelector)
    
    this.listener()
  }
  
  listener() {
    this.$menu.addEventListener('click', event => {
      const $el = event.target.closest(`[data-id]`)
      const {id} = $el.dataset
      id ? this.opener(id) : null
    })
  }
  
  opener(id) {
    this.close()
    
    this.$menu.querySelector(`[data-id="${id}"]`).classList.add('open')
    this.$items.querySelector(`[data-item="${id}"]`).classList.add('open')
  }
  
  close() {
    const menuList = this.$menu.querySelectorAll('[data-id]')
    const itemsList = this.$items.querySelectorAll('[data-item]')
    
    menuList.forEach($el => $el.classList.remove('open'))
    itemsList.forEach($el => $el.classList.remove('open'))
  }
}
