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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.html");
require("./weatherStyle.css");
//*You must display the following data points on the page from the API: Current Date, City from the zipcode, 
//Current temperature in ferinheight, current conditions, Temp Hi/Lo */
// You must make an API call to the service and get the weather data
var myApi = "a1abbf3acc40da02cb3d567822d3f241";
// function get weather data
function getWeatherData(zipCode) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.openweathermap.org/data/2.5/weather?zip=".concat(zipCode, ",us&appid=").concat(myApi, "&units=imperial");
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function displayWeatherData(data) {
    // date and time
    var currentDate = new Date().toLocaleDateString();
    document.querySelector(".currentDate").innerHTML = "Date: ".concat(currentDate);
    // city and condition
    var city = data.name;
    var conditions = data.weather[0].description;
    document.querySelector(".zipCodeCity").innerHTML = "City: ".concat(city);
    document.querySelector(".currentConditions").innerHTML = "Current conditions: ".concat(conditions);
    // the temperature
    var currentTemp = data.main.temp;
    var tempHi = data.main.max;
    var tempLo = data.main.min;
    document.querySelector(".temperature").innerHTML = "Temperature: ".concat(currentTemp, " &#x2109");
    document.querySelector(".tempHi").innerHTML = "High: ".concat(tempHi, " &#x2109");
    document.querySelector(".tempLo").innerHTML = "Low: ".concat(tempLo, " &#x2109");
}
// user clicks the "Get Weather" button, get the weather for the zipcode they entered.
(_a = document.getElementById("getWeather")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        var zipCode, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    zipCode = document.getElementById("zipCode").value;
                    return [4 /*yield*/, getWeatherData(zipCode)];
                case 1:
                    data = _a.sent();
                    displayWeatherData(data);
                    return [2 /*return*/];
            }
        });
    });
});
