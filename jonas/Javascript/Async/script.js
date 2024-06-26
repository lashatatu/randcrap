"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderCountry = function (data, className = "") {
  const html = `
 <article class="country ${className}">
 <img class="country__img" src="${data.flags.png}" />
 <div class="country__data">
 <h3 class="country__name">${data.name}</h3>
 <h4 class="country__region">${data.region}</h4>
 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
   1
 )}M people</p>
 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
 </div>
 </article>
 `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

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
 `https://restcountries.com/v2/name/${country}?fullText=true`
 */
/*

 const getCountryData = function (country) {
 fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
 .then((res) => {
 console.log(res);

 if(!res.ok){
 throw new Error(`Country not found ${res.status}`)
 }

 return res.json();
 })
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
 .then(data => renderCountry(data, 'neighbour'))
 .catch(err => {
 console.log(`${err} error`);
 renderError(`something went wrong ${err.message}`)
 }).finally(()=>{
 countriesContainer.style.opacity = 1;

 })
 };

 btn.addEventListener('click', function () {
 getCountryData('asdasd');

 });

 */

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};
/*
 const getCountryData = function (country) {
 getJSON(`https://restcountries.com/v2/name/${country}?fullText=true`, 'Country not found')
 .then((data) => {
 renderCountry(data[0]);
 const neighbour = data[0].borders?.[0];
 if ( !neighbour ) {
 throw new Error('no neighbour found!');
 }
 return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,'something went wrong');
 },
 )
 .then(data => renderCountry(data, 'neighbour'))
 .catch(err => {
 console.log(`${err} error`);
 renderError(`something went wrong ${err.message}`);
 })
 .finally(() => {
 countriesContainer.style.opacity = 1;

 });
 };

 btn.addEventListener('click', function () {
 getCountryData('australia');
 });

 */
/*

 const lotteryPromise = new Promise(function (resolve, reject) {
 console.log('lottery draw is hapening');
 setTimeout(()=>{
 if ( Math.random() >= 0.5 ) {
 resolve('you win');
 } else {
 reject(new Error('you lost money'));
 }
 }, 1000)
 });

 lotteryPromise.then(res => console.log(res))
 .catch(err => console.error(err));

 */
/*

 const getPosition = function () {
 return new Promise(function (resolve, reject) {
 // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
 navigator.geolocation.getCurrentPosition(resolve, reject);
 });
 };

 getPosition()
 .then(pos => console.log(pos));

 const whereAmI = function () {
 getPosition()
 .then(pos => {
 const {
 latitude: lat,
 longitude: lng,
 } = pos.coords;
 return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=`);
 })
 .then((res) => {
 if ( !res.ok ) {
 throw new Error(`Problem with geocoding ${res.status}`);
 }
 return res.json();
 })
 .then(data => {
 console.log(data);

 return fetch(`https://restcountries.com/v2/name/${data.country}?fullText=true`);
 })
 .then(res => {
 if ( !res.ok ) {
 throw new Error(`Country not found (${res.status})`);
 }

 return res.json();
 })
 .then(data => renderCountry(data[0]))
 .catch(err => console.error(`${err.message}`));
 };

 btn.addEventListener('click', whereAmI);

 */

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
/*

 // async functions

 const whereAmI = async function (country) {
 try {
 const pos = await getPosition();
 const {
 latitude: lat,
 longitude: lng,
 } = pos.coords;
 const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
 const dataGeo = await resGeo.json();
 console.log(dataGeo);

 const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}?fullText=true`);
 const data = await res.json();
 console.log(data);
 renderCountry(data[0]);

 return `you are in ${dataGeo.region}, ${dataGeo.country}`
 } catch ( err ) {
 console.error(err);
 renderCountry(`something went wrong ${err.message}`)
 }

 };

 whereAmI().then(city=>console.log(city))

 */
/*

// promises combinator

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}?fullText=true`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}?fullText=true`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}?fullText=true`);
    const data=await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}?fullText=true`),
      getJSON(`https://restcountries.com/v2/name/${c2}?fullText=true`),
      getJSON(`https://restcountries.com/v2/name/${c3}?fullText=true`),
    ]);
    console.log(data.map(dat=>dat[0].capital));
  } catch ( err ) {
    console.error(err);
  }
};

get3Countries('portugal', 'georgia', 'china');

*/
