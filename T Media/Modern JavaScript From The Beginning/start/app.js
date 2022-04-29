console.log(' World');
console.log(123);
console.log(true);
console.log([1, 2, 3]);

function hello (name, surname) {
  console.log(`Hello ${name} ${surname}`);
}

hello('lasha', 'tatulashvili');

function lasha (work) {
  hello('lasha', 'tatulashvili');
  console.log(`I am a ${work}`);
}

lasha('developer');