const cardDisplay: any = document.querySelector("[data-card-display]");
const searchPages: any = document.querySelector("[data-search-pages]");
const footer: any = document.querySelector("[data-footer]");

async function dataFetch() {
    let URL: string = "./data.json";
    let response: Response = await fetch(URL);
    let data: any = await response.json();

    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const langParam: string | null = urlParams.get("lang");
    const lang: string = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
    const filter: any = data.Display.filter((display: any) => display.titlePage.toLowerCase().includes(lang));

    filter.forEach((ele: any) =>{
        let card: string = ``;
        ele.cards.forEach((ele: any) => {
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

    const card: any = document.querySelectorAll("[data-card]");
    const title: any = document.querySelectorAll("[data-title]");

    searchPages.addEventListener("keyup", () => {
        for (let i: number = 0; i < title.length; i++) {
            if (title[i].innerHTML.toLowerCase().indexOf(searchPages.value.toLowerCase()) >= 0) {
                card[i].style.display = "";
                footer.style.display = "";
            } else {
                card[i].style.display = "none";
                footer.style.display = "none";
            };
        };
    });
};
dataFetch();