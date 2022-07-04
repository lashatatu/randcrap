'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*

 const getCountryData=function (country){
 const request = new XMLHttpRequest();
 request.open('GET', `https://restcountries.com/v2/name/${country}?fullText=true`);
 request.send();

 request.addEventListener('load',function (){

 const [data]=JSON.parse(this.responseText)
 console.log(data);

 const html=`
 <article class="country">
 <img class="country__img" src="${data.flags.png}" />
 <div class="country__data">
 <h3 class="country__name">${data.name}</h3>
 <h4 class="country__region">${data.region}</h4>
 <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}M people</p>
 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
 </div>
 </article>
 `

 countriesContainer.insertAdjacentHTML('beforeend',html)
 countriesContainer.style.opacity=1;
 })
 }

 getCountryData('georgia')
 getCountryData('usa')

 */

const renderCountry = function (data, className = '') {
  const html = `
 <article class="country ${className}">
 <img class="country__img" src="${data.flags.png}" />
 <div class="country__data">
 <h3 class="country__name">${data.name}</h3>
 <h4 class="country__region">${data.region}</h4>
 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
 </div>
 </article>
 `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
 const getCountryAndNeighbour = function (country) {
 const request = new XMLHttpRequest();
 request.open('GET', `https://restcountries.com/v2/name/${country}?fullText=true`);
 request.send();

 request.addEventListener('load', function () {

 const [data] = JSON.parse(this.responseText);
 console.log(data);
 renderCountry(data);

 // get neighbour country

 const neighbour = data.borders?.[0];

 const request2 = new XMLHttpRequest();
 request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
 request2.send();

 request2.addEventListener('load', function () {
 const data2 = JSON.parse(this.responseText);
 console.log(data2);
 renderCountry(data2, 'neighbour');
 });

 });
 };

 getCountryAndNeighbour('georgia');*/

// const request=fetch('https://restcountries.com/v2/name/${country}?fullText=true')
/*

 const getCountryData = function (country) {
 fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
 .then(function (res) {
 console.log(res);
 return res.json();
 })
 .then(function (data) {
 console.log(data);
 renderCountry(data[0]);
 });
 };

 */

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];
        if ( !neighbour ) {
          return;
        }
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
      },
    )
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('georgia');




