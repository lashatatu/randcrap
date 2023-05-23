const listItems= document.querySelectorAll('li');
const list= document.querySelector('ul');
//
// listItems.forEach(function(item){
//     item.addEventListener('click', (e)=>{
//         e.target.style.textDecoration = 'line-through';
//     });
// });

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.style.textDecoration = 'line-through';
    }
})
