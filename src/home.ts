/**
 * search home page
 */
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

/**
 * push cards in card list
 */
const cardList: any = document.querySelector("[data-card-list]");

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

async function fetshData() {
    let URL: string = "./data.json";
    let response: Response = await fetch(URL);
    let data: any = await response.json();

    cardList.innerHTML = "";

    data.Homepage.forEach((ele: any) => {
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
};
fetshData();