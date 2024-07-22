/**
 * overflow
 */
const overflow: any = document.querySelector("[data-overflow]"); 

/**
 * loading page
 */
const loadingPage: any = document.querySelector("[data-loading-page]"); 

window.addEventListener("load", () => { setTimeout(() => { 
    loadingPage.classList.add("active"); 
    document.body.classList.add("load");
}, 1000); });

/**
 * header
 */
const header: any = document.querySelector("[data-header]");
const logo: any = document.querySelector("[data-logo]");
const form: any = document.querySelector("[data-form]");
const hiddenSerach: any = document.querySelector("[data-hidden-serach]");
const headerIcons: any = document.querySelector("[data-header-icons]");
const showSearch: any = document.querySelector("[data-show-search]");
const focusSearch: any = document.querySelector("[data-focus-search-mobile]");

// scroll header
window.addEventListener("scroll", () => { if (scrollY >= 100) { header.classList.add("active"); } else { header.classList.remove("active"); } });

// show search
showSearch.addEventListener("click", () => {
    form.classList.add("active");
    logo.style.display = "none";
    headerIcons.style.display = "none";
    focusSearch.focus();
});

hiddenSerach.addEventListener("click", () => {
    form.classList.remove("active");
    logo.style.display = "flex";
    headerIcons.style.display = "flex";
});

/**
 * aside
 */
const burger: any = document.querySelector("[data-burger]");
const aside: any = document.querySelector("[data-aside]");
const closeAside: any = document.querySelector("[data-close-aside]");
const toggle_back_drop: any = document.querySelectorAll("[data-toggle-back-drop]");
const back_drob_down: any = document.querySelectorAll("[data-back-drob-down]");

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

for (let i: number = 0; i < toggle_back_drop.length; i++) { toggle_back_drop[i].addEventListener("click", () => { back_drob_down[i].classList.toggle("active"); }); };