const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const header = $('.header')
const content = $('.content')
const footer = $('.footer')
const sidebarHides = $$('.sidebar-hide')
const sidebarWidths = $$('.sidebar-width')
const sidebarBtn = $('.sidebar-mini')

let contentDefaultHeight = content.clientHeight
// let contentDefaulWidth= content.clientWidth

function updateContentHeight() {
    // const totalHeight = footer.clientHeight;
    const contentHeight = window.innerHeight - header.clientHeight - footer.clientHeight;
    if (contentDefaultHeight < contentHeight) {
        content.style.height = contentHeight + "px";
    }
    // let contentlWidth = window.innerWidth - $('.sidebar').clientWidth
    // if (contentDefaulWidth < contentlWidth) {
    //     // content.style.height = (contentHeight-17) + "px";
    // }
}

updateContentHeight()
window.addEventListener('resize', updateContentHeight);

sidebarBtn.addEventListener('click', () => {
    sidebarHides.forEach(sidebarHide => {
        sidebarHide.classList.toggle("sidebar-small-hide");
    });
    sidebarWidths.forEach(sidebarWidth => {
        sidebarWidth.classList.toggle("sidebar-small-width");
    });
})