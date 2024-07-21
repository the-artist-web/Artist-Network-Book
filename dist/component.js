"use strict";
const overflow = document.querySelector("[data-overflow]");
const loadingPage = document.querySelector("[data-loading-page]");
window.addEventListener("load", () => {
    setTimeout(() => {
        loadingPage.classList.add("active");
        document.body.classList.add("load");
    }, 1000);
});
const header = document.querySelector("[data-header]");
const logo = document.querySelector("[data-logo]");
const form = document.querySelector("[data-form]");
const hiddenSerach = document.querySelector("[data-hidden-serach]");
const headerIcons = document.querySelector("[data-header-icons]");
const showSearch = document.querySelector("[data-show-search]");
window.addEventListener("scroll", () => { if (scrollY >= 100) {
    header.classList.add("active");
}
else {
    header.classList.remove("active");
} });
showSearch.addEventListener("click", () => {
    form.classList.add("active");
    logo.style.display = "none";
    headerIcons.style.display = "none";
});
hiddenSerach.addEventListener("click", () => {
    form.classList.remove("active");
    logo.style.display = "flex";
    headerIcons.style.display = "flex";
});
const burger = document.querySelector("[data-burger]");
const aside = document.querySelector("[data-aside]");
const closeAside = document.querySelector("[data-close-aside]");
const toggle_back_drop = document.querySelectorAll("[data-toggle-back-drop]");
const back_drob_down = document.querySelectorAll("[data-back-drob-down]");
burger.addEventListener("click", () => {
    aside.classList.add("active");
    overflow.classList.add("active");
});
closeAside.addEventListener("click", () => {
    aside.classList.remove("active");
    overflow.classList.remove("active");
});
overflow.addEventListener("click", () => {
    aside.classList.remove("active");
    overflow.classList.remove("active");
});
for (let i = 0; i < toggle_back_drop.length; i++) {
    toggle_back_drop[i].addEventListener("click", () => { back_drob_down[i].classList.toggle("active"); });
}
;
//# sourceMappingURL=component.js.map