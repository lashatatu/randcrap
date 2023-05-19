let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes;

for(let i = 0; i < parent.childNodes.length; i++) {
  if(parent.childNodes[i].nodeType === 1) {
    console.log(parent.childNodes[i].nodeName);
  }
}

console.log(output);
