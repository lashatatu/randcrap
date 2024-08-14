let names: string[] = ["lasha", "nana", "omari"];

function checkNames(name: string): boolean {
  return names.includes(name);
}

let checkName = "giorgi";
if (checkNames(checkName)) {
  console.log(`name (${checkName}) is on the list`);
} else {
  console.log(`name (${checkName}) is not on the list`);
}
