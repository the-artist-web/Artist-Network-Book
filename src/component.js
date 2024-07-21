/**
 * overflow
 */
var overflow = document.querySelector("[data-overflow]");
/**
 * loading page
 */
var loadingPage = document.querySelector("[data-loading-page]");
window.addEventListener("load", function () {
    setTimeout(function () {
        loadingPage.classList.add("active");
        document.body.classList.add("load");
    }, 1000);
});
/**
 * header
 */
var header = document.querySelector("[data-header]");
var logo = document.querySelector("[data-logo]");
var form = document.querySelector("[data-form]");
var formItem = document.querySelectorAll(".form-item");
var hiddenSerach = document.querySelector("[data-hidden-serach]");
var headerIcons = document.querySelector("[data-header-icons]");
var showSearch = document.querySelector("[data-show-search]");
// scroll header
window.addEventListener("scroll", function () { if (scrollY >= 100) {
    header.classList.add("active");
}
else {
    header.classList.remove("active");
} });
// show search
showSearch.addEventListener("click", function () {
    form.classList.add("active");
    logo.style.display = "none";
    headerIcons.style.display = "none";
});
hiddenSerach.addEventListener("click", function () {
    form.classList.remove("active");
    logo.style.display = "flex";
    headerIcons.style.display = "flex";
});
/**
 * aside
 */
var burger = document.querySelector("[data-burger]");
var aside = document.querySelector("[data-aside]");
var closeAside = document.querySelector("[data-close-aside]");
var toggle_back_drop = document.querySelectorAll("[data-toggle-back-drop]");
var back_drob_down = document.querySelectorAll("[data-back-drob-down]");
burger.addEventListener("click", function () {
    aside.classList.add("active");
    overflow.classList.add("active");
});
closeAside.addEventListener("click", function () {
    aside.classList.remove("active");
    overflow.classList.remove("active");
});
overflow.addEventListener("click", function () {
    aside.classList.remove("active");
    overflow.classList.remove("active");
});
var _loop_1 = function (i) {
    toggle_back_drop[i].addEventListener("click", function () { back_drob_down[i].classList.toggle("active"); });
};
for (var i = 0; i < toggle_back_drop.length; i++) {
    _loop_1(i);
}
;
