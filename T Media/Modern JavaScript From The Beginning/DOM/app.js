const btn=document.querySelector('#btn');

console.log(btn);
btn.addEventListener('click',()=>{
  // switch body style
  btn.style.backgroundColor=btn.style.backgroundColor==='white'?'#ccc':'white';
  btn.style.textDecoration=btn.style.textDecoration==='none'?'underline':'none';

});