var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var cardDisplay = document.querySelector("[data-card-display]");
var searchPages = document.querySelector("[data-search-pages]");
var footer = document.querySelector("[data-footer]");
function dataFetch() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, urlParams, langParam, lang, filter, card, title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./data.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    urlParams = new URLSearchParams(window.location.search);
                    langParam = urlParams.get("lang");
                    lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
                    filter = data.Display.filter(function (display) { return display.titlePage.toLowerCase().includes(lang); });
                    filter.forEach(function (ele) {
                        var card = "";
                        ele.cards.forEach(function (ele) {
                            card += "\n            <li class=\"card\" data-card>\n                <img src=\"".concat(ele.image, "\" class=\"card-img img-desctop img-cover\">\n\n                <div class=\"card-body\">\n                    <h2 class=\"title-content\" data-title>").concat(ele.titleCard, "</h2>\n    \n                    <p class=\"toggle-text\">").concat(ele.description, "</p>\n    \n                    <p class=\"lang-circle\">").concat(ele.lang, "</p>\n                </div>\n            </li>\n            ");
                        });
                        cardDisplay.innerHTML = "\n        <div class=\"header-card\">\n            <div class=\"header-body\">\n                <h1 class=\"title-header\">".concat(ele.titlePage, "</h1>\n                <p class=\"text-header\">").concat(ele.textContent, "</p>\n            </div>\n\n            <a href=\"display.html?lang=").concat(ele.langGo, "\" class=\"btn-neutral\">\u0647\u064A\u0627 \u0628\u0646\u0627 \u0644\u0644\u0645\u0633\u062A\u0648\u064A \u0627\u0644\u062A\u0627\u0644\u064A</a>\n        </div>\n\n        <ul class=\"card-list\">").concat(card, "</ul>\n        ");
                    });
                    card = document.querySelectorAll("[data-card]");
                    title = document.querySelectorAll("[data-title]");
                    searchPages.addEventListener("keyup", function () {
                        for (var i = 0; i < title.length; i++) {
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
                    return [2 /*return*/];
            }
        });
    });
}
;
dataFetch();
