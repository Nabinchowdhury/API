const loadCountries = () => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
        .then(res => res.json())
        .then(data => showCountries(data))
}


const showCountries = countries => {
    const allCountries = document.getElementById("all-countries");
    // console.log(countries)

    // allCountries.classList.add("countries")

    countries.forEach(country => {
        console.log(country)

        const countryDiv = document.createElement("div");
        countryDiv.classList.add('countries')
        countryDiv.innerHTML =
            `
    <h3>Name: ${country.name.common} </h3>
    <p>Capital: ${country.capital ? country.capital : 'No Capital'} </p>
    <button onclick="loadcountryDetails('${country.cca2}' )">Details </button>
        `
        allCountries.appendChild(countryDiv);
    })

}

const loadcountryDetails = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]))

}
const showCountryDetails = (code) => {
    console.log(code)
    const countryDetails = document.getElementById("country-details");

    countryDetails.innerHTML =
        `
    <h4>Country Name: ${code.name.common}</h4>
    <h5>Country Code: ${code.cca2}</h5>
    <img src="${code.flags.png}" alt="">
    `


}

loadCountries();

