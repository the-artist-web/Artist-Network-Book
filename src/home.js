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
/**
 * search home page
 */
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
/**
 * push cards in card list
 */
var cardList = document.querySelector("[data-card-list]");
cardList.innerHTML = "\n<li class=\"card-skeleton\">\n    <div class=\"img-card-skeleton\">\n\n    <div class=\"card-body\">\n        <div class=\"card-header\">\n            <h2 class=\"title-content-skeleton\"></h2>\n\n            <div class=\"btn-skeleton\"></div>\n        </div>\n\n        <p class=\"toggle-text-skeleton txt-1\"></p>\n        <p class=\"toggle-text-skeleton txt-2\"></p>\n        <p class=\"toggle-text-skeleton txt-3\"></p>\n\n        <p class=\"lang-circle\">\n            <div class='circle-skeleton'></i> <span class=\"text-skeleton\">\n        </p>\n    </div>\n</li>\n".repeat(20);
function fetshData() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data;
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
                    cardList.innerHTML = "";
                    data.Homepage.forEach(function (ele) {
                        cardList.innerHTML += "\n        <li class=\"card\">\n            <img src=\"".concat(ele.image, "\" alt=\"html\" class=\"card-img img-desctop img-cover\">\n\n            <div class=\"card-body\">\n                <h2 class=\"title-content\">").concat(ele.titleCard, "</h2>\n\n                <p class=\"toggle-text\">\n                    ").concat(ele.description, "\n                </p>\n\n                <p class=\"lang-circle\">\n                    ").concat(ele.lang, "\n                </p>\n            </div>\n        </li>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
fetshData();
