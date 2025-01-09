let cities = [
    { "City_Id": 50, "Name": "Paris", "Population": 1000, "District": "Iles de france", "CountryCode": "FRA" },
    { "City_Id": 51, "Name": "Lyon", "Population": 3000, "District": "Rhône-Alpes", "CountryCode": "FRA" },
    { "City_Id": 52, "Name": "Marseille", "Population": 10000, "District": "Provence-Alpes-Côte", "CountryCode": "FRA" },
];
 
const tableHeader = `
<table>
    <thead>
        <tr>
            <th>City_Id</th>
            <th>Name</th>
            <th>CountryCode</th>
            <th>District</th>
            <th>Population</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`;
 
document.querySelector('#displayCities').innerHTML = tableHeader;
 
export function displayCities(txt) {
    const url = new URL('http://127.0.0.1:8888/api/backendDynamic.php');
    const params = { "code": txt };
    url.search = new URLSearchParams(params);

    fetch(url)
        .then(function (response) {
            console.log("Response : %O", response);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        })
        .then(function (data) {
            console.log("Data : %O", data);

            updateTable(data);
        })
        .catch(function (error) {
            console.error("Error : %O", error);
        });
}

function updateTable(cities) {
    const tbody = document.querySelector('#displayCities > table > tbody');
    tbody.innerHTML = '';

    cities.forEach(city => {
        const tr = document.createElement('tr');

        const tdCityId = document.createElement('td');
        tdCityId.textContent = city.id || 'N/A';
        tr.appendChild(tdCityId);

        const tdName = document.createElement('td');
        tdName.textContent = city.nom || 'N/A';
        tr.appendChild(tdName);

        const tdCountryCode = document.createElement('td');
        tdCountryCode.textContent = city.code || 'N/A';
        tr.appendChild(tdCountryCode);

        const tdPopulation = document.createElement('td');
        tdPopulation.textContent = city.population || 'N/A';
        tr.appendChild(tdPopulation);

        const tdDistrict = document.createElement('td');
        tdDistrict.textContent = city.district || 'N/A';
        tr.appendChild(tdDistrict);

        tbody.appendChild(tr);
    });
}
