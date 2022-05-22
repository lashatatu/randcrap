let temps1 = [17, 21, 23];
let temps2 = [12, 5, -5, 0, 4];
let temps = temps1.concat(temps2);

console.log(temps);

const printForecast = (arr) => {
  let forecast = '';
  for (let  i=0; i < arr.length; i++ ) {
    forecast = forecast + `... ${arr[i]}C in ${i + 1} days `;
  }
  console.log(forecast);
};

printForecast(temps);