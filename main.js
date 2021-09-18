console.log("connected");

const loadCOuntries = () => {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
    // console.log(countries);
    const getCountries = countries.map((country) => countryHTML(country));
    console.log(countries[0]);

    const showCountries = document.getElementById("showCountries");
    showCountries.innerHTML = getCountries.join(" ");
};

const countryHTML = (country) => {
    return `<div class="country">
    <img src='${country.flag}'>
    <h2>${country.name}</h2>
    <h4>${country.capital} </h4>
    <h4>${country.region}</h4>
     </div>`;
};

loadCOuntries();