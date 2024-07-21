var btnIconSearch = document.querySelector("[data-btn-icon-search]");
var searchHomePage = document.querySelector("[data-search-home-page]");
var fromList = document.querySelector("[data-from-list]");
var formLang = document.querySelectorAll("[data-form-lang]");
var formItem = document.querySelectorAll("[data-form-item]");
searchHomePage.addEventListener("keyup", function () {
    for (var i = 0; i < formLang.length; i++) {
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
btnIconSearch.addEventListener("click", function () { if (searchHomePage.value)
    window.location = "/display.html?lang=".concat(searchHomePage.value); });
searchHomePage.addEventListener("keyup", function (e) { if (e.key === "Enter")
    btnIconSearch.click(); });
