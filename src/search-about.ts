const btnIconSearch: any = document.querySelector("[data-btn-icon-search]");
const searchHomePage: any = document.querySelector("[data-search-home-page]");
const fromList: any = document.querySelector("[data-from-list]");
const formLang: any = document.querySelectorAll("[data-form-lang]");
const formItem: any = document.querySelectorAll("[data-form-item]");

searchHomePage.addEventListener("keyup", () => {
    for (let i: number = 0; i < formLang.length; i++) {
        if (formLang[i].innerHTML.toLowerCase().indexOf(searchHomePage.value.toLowerCase()) >= 0) {
            formItem[i].style.display = "";
            fromList.classList.remove("active");
        } else {
            formItem[i].style.display = "none";
            fromList.classList.add("active");
        };
    };
});

btnIconSearch.addEventListener("click", () => { if (searchHomePage.value) window.location = `/display.html?lang=${searchHomePage.value}`; });

searchHomePage.addEventListener("keyup", (e: any) => { if (e.key === "Enter") btnIconSearch.click(); });