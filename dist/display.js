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
const cardDisplay = document.querySelector("[data-card-display]");
const searchPages = document.querySelector("[data-search-pages]");
const footer = document.querySelector("[data-footer]");
function dataFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = "./data.json";
        let response = yield fetch(URL);
        let data = yield response.json();
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("lang");
        const lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
        const filter = data.Display.filter((display) => display.titlePage.toLowerCase().includes(lang));
        filter.forEach((ele) => {
            let card = ``;
            ele.cards.forEach((ele) => {
                card += `
            <li class="card" data-card>
                <img src="${ele.image}" class="card-img img-desctop img-cover">

                <div class="card-body">
                    <h2 class="title-content" data-title>${ele.titleCard}</h2>
    
                    <p class="toggle-text">${ele.description}</p>
    
                    <p class="lang-circle">${ele.lang}</p>
                </div>
            </li>
            `;
            });
            cardDisplay.innerHTML = `
        <div class="header-card">
            <div class="header-body">
                <h1 class="title-header">${ele.titlePage}</h1>
                <p class="text-header">${ele.textContent}</p>
            </div>

            <a href="display.html?lang=${ele.langGo}" class="btn-neutral">هيا بنا للمستوي التالي</a>
        </div>

        <ul class="card-list">${card}</ul>
        `;
        });
        const card = document.querySelectorAll("[data-card]");
        const title = document.querySelectorAll("[data-title]");
        searchPages.addEventListener("keyup", () => {
            for (let i = 0; i < title.length; i++) {
                if (title[i].innerHTML.toLowerCase().indexOf(searchPages.value.toLowerCase()) >= 0) {
                    card[i].style.display = "";
                    footer.style.display = "";
                }
                else {
                    card[i].style.display = "none";
                    footer.style.display = "none";
                }
                ;
            }
            ;
        });
    });
}
;
dataFetch();
//# sourceMappingURL=display.js.map