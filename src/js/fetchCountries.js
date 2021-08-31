import { refs } from "./refs";

const baseUrl = `https://restcountries.eu/rest/v2/name/`;
export default function fetchCountries (searchQuery) {
   return fetch(`${baseUrl}${searchQuery}`).then(response => response.json());
};
// refs.input.addEventListener('input', debounce(getCountries, 500))

