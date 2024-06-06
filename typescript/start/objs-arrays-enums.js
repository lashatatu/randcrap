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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "lasha",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person.role === Role.AUTHOR) {
    console.log('is Author');
}
