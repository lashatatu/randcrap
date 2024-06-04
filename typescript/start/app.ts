/*
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "lasha",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role.push("admin");
// person.role[1]=10;

console.log(person.name);
*/
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "lasha",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if(person.role===Role.AUTHOR){
  console.log('is Author')
}
