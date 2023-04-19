// async function myFunc () {
//
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('hello')},1000);
//   });
//
//   const error=false
//   if(!error){
//     const result = await promise;
//     return result
//   }else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }
//
// myFunc().then(res => console.log(res));

async function getUsers () {
  const response=await fetch('https://jsonplaceholder.typicode.com/users');

  const data=await response.json();
  return data;
}


getUsers().then(data => console.log(data));


