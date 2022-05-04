function onScroll() {
    if (scrollY > 0) {
        navigation.classlist.add('scroll')
    } else {
        navigation.classlist.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}