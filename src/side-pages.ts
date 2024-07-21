const cardSidePages: any = document.querySelector("[data-card-side-pages]");
const searchPage: any = document.querySelector("[data-search-pages]");
const foote: any = document.querySelector("[data-footer]");

async function fetchData() {
    let URL: string = "./data.json";
    let response: Response = await fetch(URL);
    let data: any = await response.json();

    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const langParam: string | null = urlParams.get("Auxiliary-tools");
    const AuxiliaryTools: string = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
    const filter: any = data.SidePages.filter((SidePages: any) => SidePages.titlePage.toLowerCase().includes(AuxiliaryTools));

    filter.forEach((ele: any) =>{
        let card: string = ``;
        ele.cards.forEach((ele: any) => {
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

    const card: any = document.querySelectorAll("[data-card]");
    const title: any = document.querySelectorAll("[data-title]");

    searchPage.addEventListener("keyup", () => {
        for (let i: number = 0; i < title.length; i++) {
            if (title[i].innerHTML.toLowerCase().indexOf(searchPage.value.toLowerCase()) >= 0) {
                card[i].style.display = "";
                foote.style.display = "";
            } else {
                card[i].style.display = "none";
                foote.style.display = "none";
            };
        };
    });
};
fetchData();