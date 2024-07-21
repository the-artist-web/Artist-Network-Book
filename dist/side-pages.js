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
const cardSidePages = document.querySelector("[data-card-side-pages]");
const searchPage = document.querySelector("[data-search-pages]");
const foote = document.querySelector("[data-footer]");
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = "./data.json";
        let response = yield fetch(URL);
        let data = yield response.json();
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("Auxiliary-tools");
        const AuxiliaryTools = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
        const filter = data.SidePages.filter((SidePages) => SidePages.titlePage.toLowerCase().includes(AuxiliaryTools));
        filter.forEach((ele) => {
            let card = ``;
            ele.cards.forEach((ele) => {
                card += `
            <li class="card" data-card>
                <div class="card-body">
                    <h2 class="title-content" data-title>${ele.titleCard}</h2>
    
                    <p class="toggle-text">${ele.description}</p>
    
                    <a href="${ele.linkWebsite}" target="_blank" class="lang-circle">${ele.linkWebsite}</a>
                </div>
            </li>
            `;
            });
            cardSidePages.innerHTML = `
        <h1 class="title">${ele.titlePage}</h1>

        <ul class="card-list">${card}</ul>
        `;
        });
        const card = document.querySelectorAll("[data-card]");
        const title = document.querySelectorAll("[data-title]");
        searchPage.addEventListener("keyup", () => {
            for (let i = 0; i < title.length; i++) {
                if (title[i].innerHTML.toLowerCase().indexOf(searchPage.value.toLowerCase()) >= 0) {
                    card[i].style.display = "";
                    foote.style.display = "";
                }
                else {
                    card[i].style.display = "none";
                    foote.style.display = "none";
                }
                ;
            }
            ;
        });
    });
}
;
fetchData();
//# sourceMappingURL=side-pages.js.map