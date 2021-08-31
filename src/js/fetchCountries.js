import { refs } from "./refs";

const baseUrl = `https://restcountries.eu/rest/v2/name/`;
export default function fetchCountries (searchQuery) {
   if (searchQuery) {
      return fetch(`${baseUrl}${searchQuery}`)
      .then(response => {
         if (response.ok) return response.json();
         throw new Error('Error fatching data');
         })

         .catch(error => {
            console.error('Error: ', error);
            refs.country.innerHTML = ""
      });
      
   }
};
// refs.input.addEventListener('input', debounce(getCountries, 500))

