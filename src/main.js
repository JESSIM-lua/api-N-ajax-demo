import './style.css';
// import './bootstrap/dist/css/bootstrap.css';
import { displayCities } from './displayCitiesIncluded.js';






console.log('Hello World');
let message = 'Ca marche !!';

document.querySelector('#app').innerHTML = `
  <div id="displayCities">${message}</div>
`;

document.querySelector('#goSearch').addEventListener('click', () => {
  console.log('Button clicked');
  const txt = document.querySelector('#txtSearch').value;
  console.warn('texte : %s', txt);
});




// function setupSearch(button) {
//   button.addEventListener('click', async () => {
//     const searchBar = document.querySelector('#txtSearch')
//     const query = searchBar.value
//     console.log(query)
//     document.querySelector('#app').appendChild(document.createElement('a'))
//     const lien = document.querySelector('#app').lastChild
//     lien.href = `https://github.com/${query}`
//     lien.textContent = query
//     lien.target = '_blank';
//     displayCities(query)

//     document.querySelector('#app').appendChild(document.createElement('br'))

//   })
// }

function setupSearch(button) {
  button.addEventListener('click', async () => {
        const searchBar = document.querySelector('#txtSearch')
        const query = searchBar.value
        console.log(query)
        displayCities(query)
  })
}


setupSearch(document.querySelector('#goSearch'))



// setupCounter(document.querySelector('#counter'))



