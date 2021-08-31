import fetchCountries from "./fetchCountries";
import { refs } from "./refs";

import { markup } from "./getMarkup";

// const { defaults } = require('@pnotify/core');
// defaults.styling = 'material';

    
var debounce = require('lodash.debounce');

function getValueCountries (e) {
    e.preventDefault();
    const searchQuery = e.target.value.trim();
    console.log(e);
    fetchCountries(searchQuery).then(data=>markup(data)).catch(err=>refs.country.innerHTML = `<p>${err}</p>`);
}


refs.input.addEventListener('input', debounce(getValueCountries, 500))


