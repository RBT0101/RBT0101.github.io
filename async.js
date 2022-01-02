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
        while (_) try {
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
var count = 0;
function createWeatherReport() {
    return __awaiter(this, void 0, void 0, function () {
        var currWeatherReport, body, display, report, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch("https://api.weatherapi.com/v1/current.json?key=3af7ea4c666840e7bdd195511213112&q=Brooklyn,NY")];
                case 1:
                    currWeatherReport = _b.sent();
                    body = currWeatherReport.body;
                    display = document.querySelector("#display-weather-report");
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    if (!(body !== null)) return [3 /*break*/, 4];
                    return [4 /*yield*/, currWeatherReport.json()];
                case 3:
                    report = _b.sent();
                    if (display !== null)
                        return [2 /*return*/, report];
                    _b.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    _a = _b.sent();
                    console.log("Fuck ");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, -1];
            }
        });
    });
}
//Asychronously update web page with the newest, up-to-date weather report
function updateWeatherReport() {
    return __awaiter(this, void 0, void 0, function () {
        var country, lastUpdated, temperature, windSpeed, currentWeather, humidity, windDirection, feelsLikeXDegree, report;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    country = document.querySelector("#country");
                    lastUpdated = document.querySelector("#updated-time");
                    temperature = document.querySelector("#temperature");
                    windSpeed = document.querySelector("#wind-speed");
                    currentWeather = document.querySelector("#current-weather");
                    humidity = document.querySelector("#humidity");
                    windDirection = document.querySelector("#wind-direction");
                    feelsLikeXDegree = document.querySelector("#feels-like");
                    return [4 /*yield*/, createWeatherReport()];
                case 1:
                    report = _a.sent();
                    if (report !== null) {
                        if (country !== null)
                            country.innerHTML = "Country: " + report.location.country;
                        if (lastUpdated !== null)
                            lastUpdated.innerHTML = "Last Updated: " + report.current.last_updated;
                        if (temperature !== null)
                            temperature.innerHTML = "Temperature (F): " + report.current.temp_f;
                        if (windSpeed !== null)
                            windSpeed.innerHTML = "Wind Speed (mph): " + report.current.wind_mph;
                        if (currentWeather !== null)
                            currentWeather.innerHTML = "Current Weather: " + report.current.condition.text;
                        if (humidity !== null)
                            humidity.innerHTML = "Humidity: " + report.current.humidity;
                        if (windDirection !== null)
                            windDirection.innerHTML = "Wind Direction: " + report.current.wind_dir;
                        if (feelsLikeXDegree !== null && temperature !== null)
                            feelsLikeXDegree.innerHTML = "Feels Like: " + report.current.temp_f + " degree Farenheit";
                        return [2 /*return*/, 1];
                    }
                    return [2 /*return*/, -1];
            }
        });
    });
}
window.setInterval(function () {
    updateWeatherReport();
    var cnt = document.querySelector("#count");
    if (cnt !== null)
        cnt.innerHTML = "Count: " + (count++);
}, 1000);
//# sourceMappingURL=async.js.map