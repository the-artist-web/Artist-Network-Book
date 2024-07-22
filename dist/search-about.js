"use strict";
const btnIconSearch = document.querySelector("[data-btn-icon-search]");
const searchHomePage = document.querySelector("[data-search-home-page]");
const fromList = document.querySelector("[data-from-list]");
const formLang = document.querySelectorAll("[data-form-lang]");
const formItem = document.querySelectorAll("[data-form-item]");
searchHomePage.addEventListener("keyup", () => {
    for (let i = 0; i < formLang.length; i++) {
        if (formLang[i].innerHTML.toLowerCase().indexOf(searchHomePage.value.toLowerCase()) >= 0) {
            formItem[i].style.display = "";
            fromList.classList.remove("active");
        }
        else {
            formItem[i].style.display = "none";
            fromList.classList.add("active");
        }
        ;
    }
    ;
});
btnIconSearch.addEventListener("click", () => { if (searchHomePage.value)
    window.location = `/display.html?lang=${searchHomePage.value}`; });
searchHomePage.addEventListener("keyup", (e) => { if (e.key === "Enter")
    btnIconSearch.click(); });
//# sourceMappingURL=search-about.js.map