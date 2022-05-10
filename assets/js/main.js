function toggleCLass(){
    let btnElement = document.querySelector(".header-container__btn--expand")
    btnElement.classList.toggle('header-container__btn--close')

    let navElement = document.querySelector('.nav-menu__list')
    navElement.classList.toggle('nav-menu__list--closed')
}