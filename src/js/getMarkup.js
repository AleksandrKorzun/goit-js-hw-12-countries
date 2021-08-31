import {error, defaultModules} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { refs } from './refs';
import oneCountry from "../templates/oneCountry"
import listCountry from "../templates/listCountry"


export function markup (array) {
    if (array.length > 1 && array.length < 11) {
        refs.country.innerHTML = listCountry(array);
    }
    else if (array.length === 1) {
        refs.country.innerHTML = oneCountry(array);
    } else  {
        errorCountry(array);
    }
    
}

function errorCountry (array) {
    if (array.length > 10) {
        error({
            text: "Too many matches found.Please enter a more specific query!",
        });
    } else {
        error({
            text: "Nothing found for your request",
        });
    }
};