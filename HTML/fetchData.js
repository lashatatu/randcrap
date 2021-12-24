const arr=[12,15,26,78,17,56,17,18,75,42,15,35,68,97,48,15,26]
const sortNumbersOfArrayRemoveDublicates=(arr)=>{
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
    }
    return newArr.sort((a,b)=>a-b)
}
console.log('first');
console.log(sortNumbersOfArrayRemoveDublicates(arr));
console.log('second');
