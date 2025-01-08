let cities = [
    { "id": 50, "nom": "Paris", "population": 1000, "district": "Iles de france" },
    { "id": 51, "nom": "Lyon", "population": 3000, "district": "Rhône-Alpes" },
    { "id": 52, "nom": "Marseille", "population": 10000, "district": "Provence-Alpes-Côte" }
];
 
const tableHeader = `
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Population</th>
            <th>District</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`;
 
document.querySelector('#displayCities').innerHTML = tableHeader;
 
export function displayCities(txt = null) {
    console.log('cities : %O', cities);
 
    const tbody = document.querySelector('#displayCities > table > tbody');
    tbody.innerHTML = '';
 
    let filteredCities = txt
        ? cities.filter(city => city.nom === txt)
        : cities;
 
 
        filteredCities.forEach(city => {
            const tr = document.createElement('tr');
 
            const tdId = document.createElement('td');
            tdId.textContent = city.id;
            tr.appendChild(tdId);
 
            const tdNom = document.createElement('td');
            tdNom.textContent = city.nom;
            tr.appendChild(tdNom);
 
            const tdPopulation = document.createElement('td');
            tdPopulation.textContent = city.population;
            tr.appendChild(tdPopulation);
 
            const tdDistrict = document.createElement('td');
            tdDistrict.textContent = city.district;
            tr.appendChild(tdDistrict);
 
            tbody.appendChild(tr);
        });
}
 