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

    let url = new URL('http://127.0.0.1:8888//api/backendDynamic.php')
    let params = {"code" : txt}
    url.search = new URLSearchParams(params)

    fetch(url).then (function(response){
        console.log("Response : %O", response)

        //Only if response code is 200
        return response.json();

    }).then(function(data){
        //Make Update of page
        console.log("Data : %O", data)
        cities = data;
        displayCities(txt);
        
    }).catch(function(error){
        console.log("Error : %O", error)
    })




    

 
    const tbody = document.querySelector('#displayCities > table > tbody');
    tbody.innerHTML = '';
 
    let filteredCities = txt
        ? cities.filter(city => city.Name === txt)
        : cities;
 
 
        filteredCities.forEach(city => {
            const tr = document.createElement('tr');
 
            const tdCity_Id = document.createElement('td');
            tdCity_Id.textContent = city.City_Id;
            tr.appendChild(tdCity_Id);
 
            const tdName = document.createElement('td');
            tdName.textContent = city.Name;
            tr.appendChild(tdName);

            const tdCountryCode = document.createElement('td');
            tdCountryCode.textContent = city.CountryCode;
            tr.appendChild(tdCountryCode);
 
            const tdPopulation = document.createElement('td');
            tdPopulation.textContent = city.Population;
            tr.appendChild(tdPopulation);
 
            const tdDistrict = document.createElement('td');
            tdDistrict.textContent = city.District;
            tr.appendChild(tdDistrict);
 
            tbody.appendChild(tr);
        });
}
 