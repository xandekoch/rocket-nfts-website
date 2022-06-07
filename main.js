window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    if (scrollY > 0) {
        navigationBar.classList.add('scroll')
    } else {
        navigationBar.classList.remove('scroll')
    }
}