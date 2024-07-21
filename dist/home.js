"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const cardList = document.querySelector("[data-card-list]");
cardList.innerHTML = `
<li class="card-skeleton">
    <div class="img-card-skeleton">

    <div class="card-body">
        <div class="card-header">
            <h2 class="title-content-skeleton"></h2>

            <div class="btn-skeleton"></div>
        </div>

        <p class="toggle-text-skeleton txt-1"></p>
        <p class="toggle-text-skeleton txt-2"></p>
        <p class="toggle-text-skeleton txt-3"></p>

        <p class="lang-circle">
            <div class='circle-skeleton'></i> <span class="text-skeleton">
        </p>
    </div>
</li>
`.repeat(20);
function fetshData() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = "./data.json";
        let response = yield fetch(URL);
        let data = yield response.json();
        cardList.innerHTML = "";
        data.Homepage.forEach((ele) => {
            cardList.innerHTML += `
        <li class="card">
            <img src="${ele.image}" alt="html" class="card-img img-desctop img-cover">

            <div class="card-body">
                <h2 class="title-content">${ele.titleCard}</h2>

                <p class="toggle-text">
                    ${ele.description}
                </p>

                <p class="lang-circle">
                    ${ele.lang}
                </p>
            </div>
        </li>
        `;
        });
    });
}
;
fetshData();
//# sourceMappingURL=home.js.map