class NavBar {
  constructor(menu, navList, navItem) {
    this.menu = document.querySelector(menu);
    this.navList = document.querySelector(navList);
    this.navItem = document.querySelectorAll(navItem);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateItem() {
    this.navItem.forEach((item, index) => {
      console.log(index);
      item.style.animation
        ? (item.style.animation = "")
        : (item.style.animation = `navItemFade 0.5s ease forwards ${
            index / 7 + 0.03
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.menu.classList.toggle(this.activeClass);
    this.animateItem();
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menu) {
      this.addClickEvent();
    }
    return this;
  }
}

const navbar = new NavBar(
  ".header__menu",
  ".navigation__list",
  ".navigation__item"
);

navbar.init();
