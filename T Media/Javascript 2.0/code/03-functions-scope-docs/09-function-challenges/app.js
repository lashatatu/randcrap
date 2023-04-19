const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

const minMax = (numbers) => {
  const min = console.log(Math.min(...numbers))
  const max = console.log(Math.max(...numbers))
  return {
    min,
    max,
  };
};

minMax([100,12,15,150,173,0,-3]);


(function (length, width){
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${width*length}`);
})(10,5)
