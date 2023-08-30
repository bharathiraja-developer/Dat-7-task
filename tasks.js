let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    // a) Get all the countries from Asia continent /region using Filter function

    let asiaRegion = data.filter(value =>value.region === 'Asia');
    console.log(asiaRegion);

    // b) Get all the countries with a population of less than 2 lakhs using Filter function

    let populationLs2lac = data.filter(value =>value.population < 200000);
    console.log(populationLs2lac);

    // c) Print the following details name, capital, flag using forEach function

    data.forEach(value => {
        console.log('name: ',value.name.common);
        console.log('capital: ',value.capital);
        console.log('flag: ',value.flag);
    });

    // d) Print the total population of countries using reduce function

    let totalPopulation = data
        .map(value => value.population)
        .reduce((a, b) => a + b);
        console.log(totalPopulation);

    // e) Print the country which uses US Dollars as currency
    
    let currencyUS = [];
    let k = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j in data[i].currencies){
            if (j === 'USD') {
                currencyUS[k] = data[i].name.common;
                k++;
            }   
        }    
    }
    console.log(currencyUS);
        

};

xhr.send();