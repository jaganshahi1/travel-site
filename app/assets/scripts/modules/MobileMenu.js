class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.navMenu = document.querySelector(".site-header__nav-container");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.togglethemenuicon());
  }

  togglethemenuicon() {
    this.navMenu.classList.toggle("site-header__nav-container--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expandable");
    
  }
}

export default MobileMenu;
