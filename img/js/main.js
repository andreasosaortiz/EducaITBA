const nav = document.getElementsByClassName('nav')[0]
const navIcon = document.getElementsByClassName('nav__icon')[0]
const navContent = document.getElementsByClassName('nav__content')[0]

navIcon.onclick = () => {
    nav.classList.toggle('nav__open')
    navContent.classList.toggle('nav__content__show')
}