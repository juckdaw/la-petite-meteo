import {templatingWeatherArea} from "./templates";
import {unknownCityMessage, emptyFieldMessage} from "./templates";
import {urlAPI} from "./urlAPI";

function printWeatherData(city, data) {
    
    /* remove "move-data-box" class to search and data box */
    
    const dataBox = document.getElementById("data-box");
    const searchBox = document.getElementById("search-box");
    dataBox.classList.remove("box__secondary--move");
    searchBox.classList.remove("box__primary--move");

    /* 
    delay 0.4 seconds :
    add "move-data-box" class to search and data box
    and templating HTML to show data from parameters
    */

    setTimeout(() => {
        dataBox.classList.add("box__secondary--move");
        searchBox.classList.add("box__primary--move");
        const weatherArea = document.getElementById("weather-area");
        weatherArea.innerHTML = templatingWeatherArea(city, data);
    }, 400);
};

/* diplay errors */

function printErrorsData(errorType) {
    const errorsField = document.getElementById("errors-field");

    switch (errorType) {
        case "unknown":
            errorsField.innerHTML = unknownCityMessage;
            break;
        case "empty":
            errorsField.innerHTML = emptyFieldMessage;
            break;
        default:
            errorsField.innerHTML = "";
            break;
    }
};

/* Request weather data in JSON from API  */

function getWeatherData(city) {

    const url = urlAPI + city;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.errors) {
                printErrorsData("unknown");
            } else {
                printErrorsData();
                printWeatherData(city, data);
            }
        });
};

/*
transform the inputted string:
- max 25 characters
- capitalize first charater
- replace each space by "-"
*/

function stringFormater(string) {
    if (string.length > 25) {
        string = string.substring(0, 25);
    }
    let stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return stringCapitalized.split(" ").join("-");
};

/* send inputted field to "getWeatherData" function */

const cityField = document.getElementById("city-field");

function sendInputtedField(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.code === "Enter" || event.type === "click") {
        const cityInputted = stringFormater(cityField.value);
        if (cityInputted) {
            getWeatherData(cityInputted);
        } else {
            printErrorsData("empty");
        }
    }
};

/* "Enter" to send */

cityField.addEventListener("keyup", sendInputtedField);

/* "Click" to send */

const sendButton = document.getElementById("submit");
sendButton.addEventListener("click", sendInputtedField);