const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const header = $('.header')
const content = $('.content')
const footer = $('.footer')

let contentDefaultHeight = content.clientHeight

function updateContentHeight() {
    const contentHeight = window.innerHeight - header.clientHeight - footer.clientHeight;
    if (contentDefaultHeight < contentHeight) {
        content.style.height = contentHeight + "px";
    }
}

updateContentHeight()

window.addEventListener('resize', updateContentHeight);